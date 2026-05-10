import AIClient from "../config/ai_client.ts";
import WebSearch from "../tools/WebSearch.ts";

export default class ScreenerAgent {

   static async getAffordableStockList() {
        // 1. Get the data from our web search tool
        const searchResult = await WebSearch.search("List of 2 trending INDIA stocks with a current price between ₹5 and ₹50", 'advanced', true);

        console.log("Raw search result:", searchResult);

        // 2. Use the LLM to parse it into a clean JSON array
        const parserResponse = await AIClient.openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "Extract exactly 20 stock ticker symbols from the text. Return ONLY a JSON array of strings, like ['AAPL', 'TSLA']. No extra text." },
                { role: "user", content: searchResult.answer || "No data provided." }
            ],
            response_format: { type: "json_object" }
        });

        const content = parserResponse?.choices[0]?.message?.content;
        if (!content) {
            throw new Error("No content received from LLM");
        }
        const data = JSON.parse(content);
        return data.tickers || data; // Returns array of tickers
    }

}
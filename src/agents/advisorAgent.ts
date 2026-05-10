import AIClient from "../config/ai_client.ts";

export default class AdvisorAgent {


    static async  analyzeStock(ticker:any, price:any, newsContent:any) {
        const response = await AIClient.openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are an expert financial advisor. Analyze if this low-cost stock is a good investment based on the provided price and news. Keep your recommendation brief (under 3 sentences)." },
                { role: "user", content: `Ticker: ${ticker}\nPrice: $${price}\nNews: ${newsContent}` }
            ]
        });
        
        return response.choices[0]?.message.content;
    }

    
}
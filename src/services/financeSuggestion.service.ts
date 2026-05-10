
import ResearcherAgent from "../agents/researcherAgent.ts";
import ScreenerAgent from "../agents/screenerAgent.ts";
import AdvisorAgent from "../agents/advisorAgent.ts";
import Finance from "../tools/Finance.ts";

export default class FinanceSuggestion {

    static async getInvestmentSuggestion() {

        try {
            console.log("Step 1: Agent 1 is finding affordable stocks...");
            const tickers = await ScreenerAgent.getAffordableStockList();

            const fullReport = [];

            // Step 2: Loop through each company (limiting to 20 just in case)
            for (const ticker of tickers.slice(0, 20)) {
                try {
                    console.log(`Processing ${ticker}...`);

                    // Gather Data via Tools and Researcher Agent
                    const news = await ResearcherAgent.getCompanyNews(ticker);
                    const quote = await Finance.getStockQuote(ticker);
                    console.table(quote);
                    //const price = quote.regularMarketPrice || 0;
                    const price = 0; // Placeholder since we are not using the price in the recommendation for now
                    // Synthesize Data via Advisor Agent
                    const recommendation = await AdvisorAgent.analyzeStock(ticker, price, news);

                    // Save to report
                    fullReport.push({
                        ticker: ticker,
                        price: price,
                        recommendation: recommendation
                    });

                } catch (err: any) {
                    console.error(`Skipping ${ticker} due to error:`, err.message);
                }
            }

            // Step 3: Send back the structured payload
            /* res.json({
                 scanDate: new Date().toISOString(),
                 totalAnalyzed: fullReport.length,
                 results: fullReport
             });
             */
            return fullReport

        } catch (error) {
            console.error("Scan Workflow Error:", error);
            //res.status(500).json({ error: "Batch scan failed to execute" });
            return error;
        }
    }

}


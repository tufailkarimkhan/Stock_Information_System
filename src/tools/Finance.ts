import AIClient from "../config/ai_client.ts";
import yahooFinance from "yahoo-finance2";

export default class Finance {


    static async getStockQuote(ticker: any) {
        return yahooFinance.quote(ticker);
    }

}
import type { Request, Response } from "express";
import FinanceSuggestion from "../services/financeSuggestion.service.ts";

export default class StockController {
  static async getStockInfo(req: Request, res: Response) {
    const result = await FinanceSuggestion.getInvestmentSuggestion();

    if (result instanceof Error) {
      res.status(500).json({ status: 500, error: result.message });
    } else {
      res.json({
        status: 200,
        scanDate: new Date().toISOString(),
        results: result,
      });
    }
  }
}

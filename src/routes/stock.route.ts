import { Router } from "express";
import StockController from "../controllers/stock.controller.ts";
const stockRouter = Router();

stockRouter.get("/stock_info",StockController.getStockInfo);

export default stockRouter; 
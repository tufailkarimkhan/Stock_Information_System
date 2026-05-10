import { Router } from "express";
import stockRouter from "./stock.route.ts";


const router = Router();

// Importing the stock route

// Use the stock route for all routes starting with /stock
router.use("/stock", stockRouter);

export default router;
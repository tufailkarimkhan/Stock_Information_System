//import express, { Request, Response } from "express";
import * as dotenv from 'dotenv';
dotenv.config({ path: '../.Dev.env' });;
import express from "express";
import router from "./routes/index.routes.ts";

const app = express();
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT || 3000;

/*app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript + Express!");
});
*/

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
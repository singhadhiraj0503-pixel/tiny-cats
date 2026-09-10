import express, { type Request, type Response } from "express";
import catRouter from "./routes/cat.route.js";
import aiRouter from "./routes/ai.routes.js";
import aiRecommendRouter from "./routes/aiRecommend.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  // res.send({
  //   success: true,
  //   message: "Server running successfully",
  // });
  res.status(200).json({
    success: true,
    message: "Server running successfully",
  });
});

app.use("/api/cats", catRouter);
app.use("/api/ai", aiRouter);
app.use("/api/aiRecommend", aiRecommendRouter);

export default app;

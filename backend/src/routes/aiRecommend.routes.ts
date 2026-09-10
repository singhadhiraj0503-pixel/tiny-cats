import express from "express";
import { aiRecommendController } from "../controllers/aiRecommend.controller.js";

const aiRecommendRouter = express.Router();

aiRecommendRouter.post("/recommendByAI", aiRecommendController);

export default aiRecommendRouter;

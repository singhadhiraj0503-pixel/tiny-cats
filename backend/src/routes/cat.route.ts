import express from "express";
import {
  createCatController,
  getAllCatsController,
  getSingleCatController,
  recommendController,
  searchCatController,
} from "../controllers/cat.controller.js";

const catRouter = express.Router();

catRouter.post("/create", createCatController);
catRouter.get("/search/all", searchCatController);
catRouter.get("/", getAllCatsController);
catRouter.get("/:id", getSingleCatController);
catRouter.post("/recommend", recommendController);

export default catRouter;

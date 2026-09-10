import type { Request, Response } from "express";
import {
  createCatService,
  getAllCatsService,
  getSingleCatService,
  recommendService,
  searchCatService,
} from "../services/cat.service.js";

export const createCatController = async (req: Request, res: Response) => {
  const result = await createCatService(req.body);

  return res.status(201).json({
    success: true,
    message: "Cat created Successfully",
    data: result,
  });
};

export const getAllCatsController = async (req: Request, res: Response) => {
  const result = await getAllCatsService();

  res.status(200).json({
    success: true,
    message: "Cats fetched successfully",
    data: result,
  });
};

export const getSingleCatController = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const result = await getSingleCatService(id);

  res.status(200).json({
    success: true,
    message: "Single Cat fetched Successfully",
    data: result,
  });
};

export const searchCatController = async (req: Request, res: Response) => {
  const q = req.query.q as string;
  const result = await searchCatService(q);

  res.status(200).json({
    success: true,
    message: "Search done successfully",
    data: result,
  });
};

export const recommendController = async (req: Request, res: Response) => {
  const { kidsFriendly, apartmentFriendly } = req.body;
  const result = await recommendService(kidsFriendly, apartmentFriendly);

  res.status(200).json({
    success: true,
    message: "Recommend done successfully",
    data: result,
  });
};

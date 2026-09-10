import catModel from "../models/cat.model.js";

export const createCatService = async (payload: object) => {
  return await catModel.create(payload);
};

export const getAllCatsService = async () => {
  return await catModel.find();
};

export const getSingleCatService = async (id: string) => {
  return await catModel.findById(id);
};

export const searchCatService = async (query: string) => {
  return await catModel.find({
    $or: [
      {
        name: {
          $regex: query,
          $options: "i",
        },
      },
      {
        breed: {
          $regex: query,
          $options: "i",
        },
      },
    ],
  });
};

export const recommendService = async (
  kidsFriendly: boolean,
  apartmentFriendly: boolean,
) => {
  return await catModel.find({ kidsFriendly, apartmentFriendly });
};

import dotenv from "dotenv";
dotenv.config();

if (!process.env.PORT) {
  console.log("PORT number not defined in the environment variables");
}

if (!process.env.MONGO_URI) {
  console.log("MONGO_URI not defined in the environment variables");
}

export const config = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
};

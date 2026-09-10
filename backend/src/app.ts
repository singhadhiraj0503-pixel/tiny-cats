import express, { type Request, type Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "Server running successfully",
  });
});

export default app;

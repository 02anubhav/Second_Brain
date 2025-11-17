import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_TOKEN_SECRET } from "./config.js";

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers["authorization"];
  if (!header) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const decoded = jwt.verify(header as string, JWT_TOKEN_SECRET);
  if (decoded) {
    (req as any).userId = (decoded as any).userId;
    next();
  } else {
    return res.status(403).json({ message: "You are not logged in" });
  }
};

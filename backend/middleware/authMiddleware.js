import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";
import asyncHandler from "express-async-handler";
export const protect = asyncHandler(async (req, res, next) => {
  let token;
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await UserModel.findById(decoded.id).select("-password");
        next();
      } catch (error) {
        res.status(401);
        throw new Error("Unauthorized");
      }
    } else {
      res.status(401);
      throw new Error("Unauthorized");
    }
  } catch (error) {
    res.status(401);
    throw new Error("Unauthorized");
  }
});

export const isAdmin = asyncHandler(async (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Unauthorized");
  }
});

export const isMasterAdmin = asyncHandler(async (req, res, next) => {
  if (req.user.isMaster) {
    next();
  } else {
    res.status(401);
    throw new Error("Only Master Admin is allowed");
  }
});

import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";
import asynchHandler from "express-async-handler";
export const protect = asynchHandler(async (req, res, next) => {
  let token;
  console.log("I am in th eproject");
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        req.user = await UserModel.findById(decoded.id).select("-password");
        console.log(req.user);
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

export const isAdmin = asynchHandler(async (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Unauthorized");
  }
});

import asyncHandler from "express-async-handler";
import Client from "../models/ClientModel.js";
import UserModel from "../models/userModel.js";
import { generateToken } from "../utils/generateToken.js";

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.admin,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Credentials");
  }
});

export const getAuditors = asyncHandler(async (req, res) => {
  const users = await UserModel.find({});
  const clients = await Client.find({ isAdmin: true });
  const auditors = users.filter((user) => user.isAdmin);

  res.json([...auditors, ...clients]);
});

export const createAuditor = asyncHandler(async (req, res) => {
  const User = await UserModel.findById(req.user._id);
  if (User) {
    const auditor = new UserModel({
      parentAuditor: User._id,
      name: "Enter Full Name",
      dp: "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
      password: "Create Password",
      email: `Enter Auditor Email-- ${uniqueId.generate(new Date().toJSON())}`,
    });

    const createdAuditor = await auditor.save();
    res.status(201).json({
      parentAuditor: User._id,
      name: "Enter Full Name",
      dp: "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
      password: "Create Password",
      email: `Enter Auditor Email-- ${uniqueId.generate(new Date().toJSON())}`,
    });
  } else {
    res.status(404);
    throw new Error("No user found");
  }
});

export const updateAuditor = asyncHandler(async (req, res) => {
  const { name, password, email, dp } = req.body;
  const auditor = await UserModel.findById(req.params.id).select("+password");
  if (auditor) {
    auditor.name = name || auditor.name;
    auditor.dp = dp || auditor.dp;
    auditor.password = password || auditor.password;
    auditor.email = email || auditor.email;
    const updatedAuditor = await auditor.save();
    if (updatedAuditor) {
      const fetchingUpdatedAuditors = await UserModel.findById(
        updatedAuditor._id
      );
      res.json(fetchingUpdatedAuditors);
    } else {
      res.status(404);
      throw new Error("Auditor not found: Some error occurred");
    }
  } else {
    res.status(404);
    throw new Error("Auditor not found");
  }
});

export const auditorDelete = asyncHandler(async (req, res) => {
  const auditor = await UserModel.findById(req.params.id);

  if (auditor) {
    await auditor.remove();
    const auditors = await UserModel.find({});
    res.json(auditors);
  } else {
    res.status(404);
    throw new Error("Auditor not found");
  }
});

export const getAuditorDetails = asyncHandler(async (req, res) => {
  const auditor = await UserModel.findById(req.params.id);
  if (auditor) {
    res.json(auditor);
  } else {
    res.status(404);
    throw new Error("Auditor not found");
  }
});
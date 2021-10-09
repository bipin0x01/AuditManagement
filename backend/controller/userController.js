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
  const {
    name,
    password,
    email,
    address,
    phone,
    registrationNumber,
    images,
    dp,
  } = req.body;
  const client = await ClientModel.findById(req.params.id).select("+password");
  if (client) {
    client.name = name || client.name;
    client.dp = dp || client.dp;
    client.password = password || client.password;
    client.email = email || client.email;
    client.address = address || client.address;
    client.phone = phone || client.phone;
    client.registrationNumber = registrationNumber || client.registrationNumber;
    client.images = images || client.images;
    const updatedClient = await client.save();
    if (updatedClient) {
      const fetchingUpdatedClient = await ClientModel.findById(
        updatedClient._id
      );
      res.json(fetchingUpdatedClient);
    } else {
      res.status(404);
      throw new Error("Client not found: Some error occurred");
    }
  } else {
    res.status(404);
    throw new Error("Client not found");
  }
});

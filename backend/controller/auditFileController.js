import asyncHandler from "express-async-handler";
import AuditFileModel from "../models/AuditFileModel.js";
import ClientModel from "../models/ClientModel.js";
import UserModel from "../models/userModel.js";
export const createAuditFile = asyncHandler(async (req, res) => {
  const User = await UserModel.findById(req.user._id).select("-password");
  if (User) {
    const client = new ClientModel({
      user: User._id,
      name: "Enter Full Name",
      password: "Create Password",
      email: "Enter Client Email",
      address: "Enter Client Address",
      phone: "Enter Client Phone",
      registrationNumber: "Enter registration Number",
      images: "Enter images url separated with comma or choose",
    });

    const createdClient = await client.save();
    res.status(201).json({
      user: User._id,
      id: createdClient._id,
      name: "Enter Full Name",
      password: "Create New Password",
      email: "Enter Client Email",
      address: "Enter Client Address",
      phone: "Enter Client Phone",
      registrationNumber: "Enter registration Number",
      images: "Enter images url separated with comma or choose",
    });
  } else {
    res.status(404);
    throw new Error("No user found");
  }
});

export const updateClient = asyncHandler(async (req, res) => {
  const { name, password, email, address, phone, registrationNumber, images } =
    req.body;

  const client = await ClientModel.findById(req.params.id);

  if (client) {
    client.name = name;
    client.password = password;
    client.email = email;
    client.address = address;
    client.phone = phone;
    client.registrationNumber = registrationNumber;
    client.images = images;
    const updatedClient = await client.save();
    console.log({ ...updatedClient, password: "" });
    if (updateClient) {
      res.json({ fuck: "you" });
    } else {
      res.status(404);
      throw new Error("Client not found: Some error occurred");
    }
  } else {
    res.status(404);
    throw new Error("Client not found");
  }
});

export const clientDelete = asyncHandler(async (req, res) => {
  const client = await ClientModel.findById(req.params.id);
  
  if (client) {
    // if (!client.image.includes("sampleimage.jpeg") && client.image) {
    //   const __dirname = path.resolve();
    //   const imageName =
    //     project.image.split("/")[project.image.split("/").length - 1];
    //   const imagePath =
    //     __dirname + "/" + "backend/" + "uploads/" + "images/" + imageName;
    //   fs.unlink(imagePath, (err) => {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }

    //     //file removed
    //   });
    // }
    await client.remove();
    const clients = await ClientModel.find({});
    res.json(clients);
  } else {
    res.status(404);
    throw new Error("Client not found");
  }
});

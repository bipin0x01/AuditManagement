import mongoose from "mongoose";
import dotenv from "dotenv";
import UserModel from "./models/userModel.js";
import AuditFileModel from "./models/AuditFileModel.js";
import userData from "./data/userData.js";
import auditFileData from "./data/auditData.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await AuditFileModel.deleteMany();
    await UserModel.deleteMany();

    const createdUser = await UserModel.insertMany(userData);
    const sampleAuditFile = auditFileData.map((audiFile) => {
      return { ...audiFile, user: createdUser[0] };
    });
    await AuditFileModel.insertMany(sampleAuditFile);
    console.log("Data imported");
  } catch (error) {
    console.log(`Error while importing: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await AuditFileModel.deleteMany();
    await UserModel.deleteMany();
    console.log("Data destroyed");
  } catch (error) {
    console.log(`Error while destroying: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}

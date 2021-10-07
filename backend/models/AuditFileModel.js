import mongoose from "mongoose";

const audiFileSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    clientName: {
      type: String,
      required: true,
    },
    auditFile: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AuditFile = mongoose.model("AuditFile", audiFileSchema);
export default AuditFile;

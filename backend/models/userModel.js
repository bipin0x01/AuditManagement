import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

userSchema.methods.matchPassword = async function (enteredPassword) {
  User.findOne({ email: this.email })
    .select("password")
    .exec(function async (err, user) {
      if (await bcrypt.compare(enteredPassword, user.password)) {
        return true;
      } else {
        return false;
      }
    });
  return;
};

export default User;

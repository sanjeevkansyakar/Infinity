import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      minLength: [8, "Password length is too Short!"],
    },
    userImage: {
      type: String,
      default: "",
    },
    provider: {
      type: String,
      default: "Credentials",
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }],
  },
  { timestamps: true }
);

const User = mongoose.models.User || new mongoose.model("User", userSchema);

export default User;

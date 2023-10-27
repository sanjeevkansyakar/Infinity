import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    blogId: {
      type: String,
      require: true,
    },
    authorName: {
      type: String,
    },
    authorImg: {
      type: String,
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true }
);

const Comment =
  mongoose.models.Comment || new mongoose.model("Comment", commentSchema);
export default Comment;

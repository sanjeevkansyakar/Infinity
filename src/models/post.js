import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    postedBy: {
      type: String,
      required: true,
    },
    authorImg: {
      type: String,
    },
    authorName: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      require: true,
    },
    imageUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || new mongoose.model("Blog", blogSchema);
export default Blog;

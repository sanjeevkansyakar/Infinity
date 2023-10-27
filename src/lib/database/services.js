import Blog from "@/models/post";
import User from "@/models/user";
import { connectToMongoose } from "./connectToMongo";

// To fetch all the blogs on page
const getAllBlogs = async () => {
  try {
    const blogs = await Blog.find();
    if (blogs.length >= 1) {
      return blogs;
    }
  } catch (error) {
    return new Error("An error occured in :: getAllBlogs", error);
  }
};

// To fetch a particular blog on page
const getBlog = async (blogId) => {
  await connectToMongoose();
  try {
    const blog = await Blog.findById(blogId);
    if (blog) {
      return blog;
    }
  } catch (error) {
    return new Error("An error occured in :: getBlog", error);
  }
};

// To create a post
const makeBlog = async (
  title,
  imageUrl,
  content,
  email,
  authorImg,
  authorName
) => {
  try {
    const blog = await Blog.create({
      postedBy: email,
      title,
      imageUrl,
      content,
      authorImg,
      authorName,
    });

    // Update user model
    await User.findOneAndUpdate(
      { email },
      {
        $push: { posts: blog._id },
      }
    );
    return blog;
  } catch (error) {
    return new Error("An error occured in :: makeBlog", error);
  }
};

export { getAllBlogs, getBlog, makeBlog };

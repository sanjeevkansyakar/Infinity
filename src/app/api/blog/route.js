import { connectToMongoose } from "@/lib/database/connectToMongo";
import { getAllBlogs } from "@/lib/database/services";
import Blog from "@/models/post";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectToMongoose();
    const blogs = await getAllBlogs();
    if (blogs) {
      return NextResponse.json({ blogs }, { status: 201 });
    }
    return NextResponse.json({ message: "No Blogs" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};

export const POST = async (req) => {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json(
      { message: "Unauthenticated User" },
      { status: 404 }
    );
  }

  try {
    await connectToMongoose();
    const blogs = await Blog.find({ postedBy: email });

    if (blogs.length >= 1) {
      return NextResponse.json({ blogs }, { status: 201 });
    }
    return NextResponse.json(
      { message: "No Blogs regarding this user" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};

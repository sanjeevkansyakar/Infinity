import { connectToMongoose } from "@/lib/database/connectToMongo";
import Comment from "@/models/comment";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { blogId, comment, authorName, authorImg } = await req.json();

  try {
    await connectToMongoose();
    const createdComment = await Comment.create({
      blogId,
      comment,
      authorName,
      authorImg,
    });
    if (createdComment) {
      return NextResponse.json(
        {
          message: "Comment created Success",
        },
        { status: 201 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Unable to create Comment",
      },
      { status: 205 }
    );
  }
};

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const blogId = searchParams.get("blogId");

  try {
    await connectToMongoose();
    const allComments = await Comment.find({ blogId });
    return NextResponse.json(
      {
        allComments,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "There was no comment",
      },
      { status: 205 }
    );
  }
};

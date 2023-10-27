import { connectToMongoose } from "@/lib/database/connectToMongo";
import Blog from "@/models/post";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query").toLowerCase();

  try {
    await connectToMongoose();

    const results = await Blog.find({
      title: { $regex: query }, // Case-insensitive search for the 'title' field
    });

    return NextResponse.json({ results }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        message: `An error occurred while searching for blogs :: ${error}.`,
      },
      { status: 500 }
    );
  }
};

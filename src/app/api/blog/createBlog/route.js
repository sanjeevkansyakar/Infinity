import { connectToMongoose } from "@/lib/database/connectToMongo";
import { makeBlog } from "@/lib/database/services";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  let { title, imageUrl, editorState, email, authorImg, authorName } =
    await req.json();

  if (!title || !imageUrl || !editorState || !email) {
    return NextResponse.json(
      { message: "Input field is empty" },
      { status: 200 }
    );
  }
  title = title.toLowerCase();
  try {
    await connectToMongoose();
    const blog = await makeBlog(
      title,
      imageUrl,
      editorState,
      email,
      authorImg,
      authorName
    );

    if (blog) {
      return NextResponse.json(
        { message: "Successfull created Blog" },
        { status: 201 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 404 });
  }
};

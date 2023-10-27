import { connectToMongoose } from "@/lib/database/connectToMongo";
import { getBlog } from "@/lib/database/services";
import Blog from "@/models/post";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const { blogId } = params;
    if (!blogId) {
      return NextResponse.json({ message: "Id Invalid" }, { status: 400 });
    }
    await connectToMongoose();
    const blog = getBlog(blogId);
    if (blog) {
      return NextResponse.json({ blog }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};

export async function DELETE(req, { params }) {
  const { blogId } = params;
  try {
    await connectToMongoose();
    const deletedBlog = await Blog.findByIdAndDelete(blogId);
    if (deletedBlog) {
      return NextResponse.json({ message: "Blog deleted" }, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Unable to delete Blog" },
      { status: 202 }
    );
  }
}

export async function POST(req, { params }) {
  const { blogId } = params;
  const { title, imageUrl, editorState } = await req.json();

  if (!blogId) {
    return NextResponse.json({ message: "Blog doesnt exist" }, { status: 204 });
  }

  if (!title || !imageUrl || !editorState) {
    return NextResponse.json(
      { message: "Input field is empty" },
      { status: 200 }
    );
  }
  try {
    await connectToMongoose();
    const updatedBlog = await Blog.findByIdAndUpdate(blogId, {
      title,
      imageUrl,
      content: editorState,
    });

    if (updatedBlog) {
      return NextResponse.json({ message: "Blog updated" }, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Unable to update Blog" },
      { status: 202 }
    );
  }
}

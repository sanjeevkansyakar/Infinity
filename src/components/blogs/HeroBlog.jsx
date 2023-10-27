"use client";
import Image from "next/image";
import Comments from "../comments/Comments";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const HeroBlog = ({ blog }) => {
  const editorState = blog.content;
  const editor = useEditor({
    editable: false,
    extensions: [StarterKit],

    editorProps: {
      attributes: {
        class:
          "leading-6 lg:leading-7 text-md max-md:text-sm px-2 py-5 text-black outline-none border-y-2 border-gray-700",
      },
    },
    content: editorState,
  });
  return (
    <div className="w-4/6 max-md:w-full max-lg:mx-auto bg-white rounded-md shadow-md border-black pb-4">
      <div>
        <Image
          src={blog.imageUrl}
          alt="Blog Image"
          width={800}
          height={400}
          className="rounded-t-md max-h-[400px]"
        />
      </div>

      <div className="max-sm:mx-4 mx-16">
        <div className="flex my-6 ">
          <Image
            src={blog.authorImg || "/manicon.png"}
            alt="User Image"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <div className="ml-4 ">
            <h3 className="font-semibold">{blog.authorName}</h3>
            <p className="text-gray-500 text-xs">
              posted on {new Date(blog.createdAt).toDateString()}
            </p>
          </div>
        </div>

        <div className="my-6 font-serif">
          <h1 className="font-extrabold text-5xl leading-normal capitalize max-lg:leading-snug max-md:text-4xl">
            {blog.title}
          </h1>
          <div className="prose prose-sm md:prose-lg bg-white/80 duration-200 max-w-[870px]">
            <EditorContent editor={editor} />
          </div>
        </div>
      </div>
      <hr className="mx-4 md:mx-14 my-4" />
      <div className="mx-4 md:mx-16">
        <Comments blogId={blog._id} />
      </div>
    </div>
  );
};

export default HeroBlog;

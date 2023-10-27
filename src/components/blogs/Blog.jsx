import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = ({ blog, deleteBlog }) => {
  return (
    <div className="w-full relative flex flex-col rounded-xl border bg-slate-200/50 transition-all duration-200 ease-in-out shadow-md hover:shadow-xl hover:bg-slate-100/80 hover:border-white p-4 gap-2 hover:scale-105">
      <div className="relative min-h-[300px] min-w-[300px] rounded-lg overflow-hidden">
        <Image
          src={blog.imageUrl}
          fill
          alt="blog image"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col font-medium text-start justify-between items-start gap-2">
        <h2 className="text-3xl capitalize leading-8 font-serif font-bold">
          {blog.title}
        </h2>
        <p
          className="text-wrap w-full"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></p>

        <div className="flex w-full items-center justify-between p-3">
          <Link href={`/write/${blog._id}`}>
            <button className="focus-visible:ring-ring ring-1 ring-white transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 px-4 py-1.5 bg-black text-white text-semibold rounded-xl hover:bg-black/70">
              Edit
            </button>
          </Link>
          <button
            className=" focus-visible:ring-ring ring-1 ring-white transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 px-4 py-1.5 bg-black text-white text-semibold rounded-xl hover:bg-black/70"
            onClick={() => deleteBlog(blog._id)}
          >
            Delete
          </button>
          <span className="w-1/2 text-sm text-end">
            {new Date(blog.createdAt).toDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blog;

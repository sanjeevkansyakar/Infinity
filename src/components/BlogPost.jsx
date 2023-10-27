import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogPost({ blog }) {
  return (
    <div className="flex flex-col items-start p-3 rounded-xl border bg-slate-200/50 transition-all duration-200 ease-in-out shadow-md hover:shadow-xl hover:bg-slate-100/80 hover:border-white hover:scale-105 min-h-[500px] min-w-sm  mx-3  shadow-stone-500 hover:-translate-y-1  gap-4 ">
      <div className="relative w-full rounded-2xl overflow-hidden h-[250px] max-w-[600px] max-h-[320px]">
        <Image
          src={blog.imageUrl}
          alt="image"
          priority
          fill
          className="object-cover"
        />
      </div>
      <div className="w-full flex-col font-medium text-start justify-between items-start gap-2">
        <h1 className="text-4xl h-20 capitalize text-wrap font-serif font-bold">
          {blog.title}
        </h1>

        <p
          className="text-lg py-3 pb-1 text-wrap"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></p>
      </div>
      <hr className="w-full bg-black h-[2px]" />
      <div className="w-full flex justify-between">
        <Link href={`/blog/${blog._id}`}>
          <button className="focus-visible:ring-ring ring-1 ring-white transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 px-4 py-1.5 bg-black text-white text-semibold rounded-xl hover:bg-black/70">
            READ NOW
          </button>
        </Link>
        <span className="">{new Date(blog.createdAt).toDateString()}</span>
      </div>
    </div>
  );
}

export default BlogPost;

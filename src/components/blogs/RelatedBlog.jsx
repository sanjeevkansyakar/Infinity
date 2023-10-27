"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const RelatedBlog = ({ blog }) => {
  const [userRelatedBlog, setUserRelatedBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getUserBlog = async () => {
      const response = await axios.post(`/api/blog`, {
        email: blog.postedBy,
      });
      setIsLoading(false);
      setUserRelatedBlog(response.data);
    };
    getUserBlog();
  }, []);

  return (
    <div className="w-2/6 h-fit rounded-md mx-auto max-lg:w-4/6 max-md:w-full mb-20 shadow-lg bg-white">
      <div className="bg-black h-8 rounded-t-md" />
      <div className="flex -mt-4 mx-8">
        <Image
          src={blog.authorImg || "/manicon.png"}
          alt="User Image"
          width={50}
          height={50}
          className="rounded-full object-cover "
        />
        <div className="ml-2 mt-6">
          <h3 className="text-xl font-bold hover:text-primary">
            {blog.authorName}
          </h3>
        </div>
      </div>

      <hr className="bg-gray-700 mt-6 mx-3" />

      <div className="mt-5 mx-4">
        <h2 className="text-lg font-semibold">Related Blogs</h2>
        {isLoading
          ? "Fetching blogs"
          : userRelatedBlog?.blogs?.map((item) => (
              <Link key={item._id} href={`/blog/${item._id}`}>
                <div className="flex my-5">
                  <Image
                    src={item.imageUrl}
                    alt="Blog Image"
                    width={100}
                    height={100}
                    className="rounded-md object-cover"
                  />

                  <div className="mx-4 p-1 overflow-hidden">
                    <p
                      className="text-sx h-18 text-wrap"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    ></p>
                    <p className="text-gray-500 text-sm text-right">
                      {new Date(item.createdAt).toDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default RelatedBlog;

"use client";

import BlogPost from "../BlogPost";
import useSWR from "swr";
import axios from "axios";

const AllBlogs = ({ searchResults }) => {
  const fetcher = async () => {
    const response = await axios.get("/api/blog");

    return response.data;
  };
  const baseURL = process.env.NEXT_PUBLIC_NEXTAUTH_URL;

  const { data: blogs, isLoading } = useSWR(baseURL, fetcher, {
    onSuccess: (data) => {
      data.blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },
  });
  return (
    <div className="mb-16 mt-8 grid lg:grid-cols-3 sm:grid-cols-2 gap-5 gap-y-8 md:gap-y-8 md:gap-3">
      {isLoading ? (
        <h2 className="text-center">Loading Blogs...</h2>
      ) : searchResults ? (
        searchResults?.map((blog) => <BlogPost key={blog._id} blog={blog} />)
      ) : (
        blogs?.blogs?.map((blog) => <BlogPost key={blog._id} blog={blog} />)
      )}
    </div>
  );
};

export default AllBlogs;

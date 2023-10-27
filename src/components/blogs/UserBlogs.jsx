"use client";
import axios from "axios";
import Blog from "./Blog";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import toast from "react-hot-toast";
import Image from "next/image";

const UserBlog = () => {
  const { data: userDetail } = useSession();
  const baseURL = process.env.NEXT_PUBLIC_NEXTAUTH_URL;
  // Blog regarding user
  const getUserBlog = async () => {
    const response = await axios.post(`/api/blog`, {
      email: userDetail?.user?.email,
    });
    return response.data;
  };
  // required states for data
  const { data: blogs, isLoading, mutate } = useSWR(baseURL, getUserBlog);

  // Delete a blog
  const deleteBlog = async (id) => {
    try {
      const response = await axios.delete(`/api/blog/${id}`);
      mutate();
      if (response.status == 201) {
        toast.success(response.data.message);
      }
    } catch (errorMessage) {
      toast.error(errorMessage.message);
    }
  };
  return (
    <div className="max-w-5xl my-14 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-5">
      {isLoading ? (
        "Loading Content"
      ) : blogs?.blogs ? (
        blogs?.blogs?.map((blog) => (
          <Blog key={blog._id} blog={blog} deleteBlog={deleteBlog} />
        ))
      ) : (
        <div className="w-full absolute left-0 flex flex-col p-2  justify-center items-center font-[futura] text-4xl text-gray-500">
          <div className="relative">
            <Image
              src="/assets/empty.png"
              alt="No Post"
              width={500}
              height={500}
            />
          </div>
          There is No post to show
        </div>
      )}
    </div>
  );
};

export default UserBlog;

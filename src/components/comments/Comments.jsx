"use client";

import Input from "../Input";
import { useSession } from "next-auth/react";
import axios from "axios";
import useSWR from "swr";
import Comment from "./Comment";

const Comments = ({ blogId }) => {
  const { data, status } = useSession();
  const name = data?.user?.name;
  const img = data?.user?.image;

  const createComment = async (e) => {
    e.preventDefault();
    const comment = e.target[0].value;
    await axios.post("/api/comment", {
      blogId,
      comment,
      authorName: name,
      authorImg: img,
    });
    e.target.reset();
    mutate();
  };

  const getAllComment = async () => {
    const response = await axios.get(`/api/comment?blogId=${blogId}`);
    return response.data;
  };

  const baseUrl = process.env.NEXT_PUBLIC_NEXTAUTH_URL;
  const { data: allComments, mutate } = useSWR(baseUrl, getAllComment);
  return (
    <div className="flex flex-col gap-1 justify-start">
      <h2 className="text-2xl max-md:text-xl font-semibold ">Comments</h2>

      {status === "authenticated" ? (
        <form
          className="flex justify-center items-center gap-5 my-3"
          onSubmit={createComment}
        >
          <Input placeholder="Write a comment" />
          <button
            type="submit"
            className="px-4 py-2 bg-black hover:bg-black/75 text-white rounded-md"
          >
            Send
          </button>
        </form>
      ) : (
        <h2 className="text-xl text-center py-3">Please login to comment...</h2>
      )}

      <div className="flex flex-col gap-4">
        {allComments &&
          allComments?.allComments?.map((comment) => {
            return <Comment key={comment._id} comment={comment} />;
          })}
      </div>
    </div>
  );
};

export default Comments;

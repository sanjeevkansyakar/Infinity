import Image from "next/image";

const Comment = ({ comment }) => {
  return (
    <div className="px-3 py-2 rounded-md border flex justify-between">
      <div className="flex items-center gap-5">
        <Image
          src={comment.authorImg || "/manicon.png"}
          alt="User image"
          width={45}
          height={45}
          className="rounded-full object-cover"
        />

        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium text-gray-600">
            {comment.authorName || "Ayush"}
          </span>
          <p className=" text-sm font-light">{comment.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;

"use client";

import { SingleImageDropzone } from "../imageStore/SingleImageDropZone";
import { useEdgeStore } from "@/lib/edgeStore";

import React, { useState } from "react";
import { Toaster } from "react-hot-toast";

import Input from "@/components/Input";
import TipTapEditor from "@/components/editor/TipTapEditor";

const DashboardContent = ({ blog = null }) => {
  const { edgestore } = useEdgeStore();
  const [isUploading, setIsUploading] = useState(false);
  // Required data for Submission
  const [title, setTitle] = useState(blog?.title || "");
  // File uploaded by user
  const [file, setFile] = useState("");
  // To show progressbar
  const [progress, setProgress] = useState(0);
  // For Image
  const [imageUrl, setImageUrl] = useState(blog?.imageUrl || "");

  const uploadToImageStore = async () => {
    if (!file) return;
    setIsUploading(true);
    const res = await edgestore.publicFiles.upload({
      file,
      input: { type: "blog" },
      onProgressChange: (progress) => {
        setProgress(progress);
      },
    });
    // to add the necessary data to your database
    setImageUrl(res?.url);
    setIsUploading(false);
  };

  return (
    <div className="w-full flex max-md:flex-col gap-5 max-md:px-3">
      <Toaster />

      <div className="md:w-1/3 flex flex-col gap-5">
        <div className="h-fit md:backdrop-blur-lg bg-white/40 shadow-lg shadow-slate-300 rounded-lg p-2">
          <Input
            label="Title for post"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="This is going to shown as heading or short description of this Blog."
          />
        </div>
        <div className="w-full flex-col items-center h-fit md:backdrop-blur-lg bg-white/40 shadow-lg shadow-slate-300 rounded-lg p-2">
          <p className="w-full mb-1 p-1 text-lg font-semibold tracking-wide">
            Add an Image
          </p>
          <SingleImageDropzone
            height={200}
            value={file}
            onChange={(file) => {
              setFile(file);
            }}
          />
          <div className="flex gap-2 justify-center items-center w-full py-1">
            <div className="h-[6px] w-3/4 rounded overflow-hidden">
              <div
                className="h-full bg-black transition-all duration-200"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
            {progress != 0 && (
              <span className="text-black text-sm">{progress}%</span>
            )}
          </div>

          <div className="flex justify-center items-center">
            <button
              disabled={isUploading}
              className=" focus-visible:ring-ring ring-1 ring-white transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 px-4 py-1.5 bg-black/90 text-white text-semibold rounded-xl hover:bg-black/70"
              onClick={uploadToImageStore}
            >
              {isUploading ? "Uploading.." : "Upload"}
            </button>
          </div>
        </div>
      </div>
      <div className="flex md:w-2/3">
        <div className="flex w-full h-fit md:backdrop-blur-lg bg-white/40 shadow-lg shadow-slate-300 rounded-lg p-2">
          <TipTapEditor
            title={title}
            setTitle={setTitle}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            setProgress={setProgress}
            setFile={setFile}
            content={blog?.content}
            blogId={blog?._id}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;

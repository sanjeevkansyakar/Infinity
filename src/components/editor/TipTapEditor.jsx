"use client";

import Placeholder from "@tiptap/extension-placeholder";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TipTapMenu from "./TipTapMenu";

import { useCompletion } from "ai/react";
import { useEffect, useRef, useState } from "react";
import { Bot, Loader2, SaveIcon } from "lucide-react";
import { useSession } from "next-auth/react";

import toast from "react-hot-toast";
import axios from "axios";

const TipTapEditor = ({
  title,
  setTitle,
  imageUrl,
  setImageUrl,
  setFile,
  setProgress,
  content,
  blogId,
  setSelectedImage,
}) => {
  const { data } = useSession();
  const email = data?.user?.email;
  const authorImg = data?.user?.image;
  const authorName = data?.user?.name;

  const [editorState, setEditorState] = useState(content ?? "");
  const [isSaving, setIsSaving] = useState(false);
  // Configure Editor
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        emptyEditorClass: "is-editor-empty",
        placeholder: "Start writing here ...",
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "leading-6 lg:leading-7 text-md max-md:text-sm px-2 text-black outline-none border border-gray-200",
      },
    },
    content: editorState,
    onUpdate: ({ editor }) => {
      setEditorState(editor.getHTML());
    },
  });

  // For auto complete feature
  const { complete, completion, isLoading } = useCompletion({
    api: "/api/completion",
  });

  // 1.To hold the last completeion value.
  const lastCompletion = useRef("");

  // 2. Using useEffect to compare from last value to current value of completion. Saving the value to editor
  useEffect(() => {
    if (!completion || !editor) return;
    const diff = completion.slice(lastCompletion.current.length);
    lastCompletion.current = completion;
    editor?.commands.insertContent(diff);
  }, [completion]);

  const handleCompletion = () => {
    const prompt = editor.getText().split(" ").slice(-20).join(" ");
    if (prompt.length >= 1) {
      complete(prompt);
    }
    return;
  };

  // To save blog in databse
  const createPost = async () => {
    setIsSaving(true);
    const response = await axios.post("/api/blog/createBlog", {
      title,
      imageUrl,
      editorState,
      email,
      authorImg,
      authorName,
    });
    if (response.status === 201) {
      toast.success(response.data.message);
      setIsSaving(false);
      setEditorState("");
      setImageUrl("");
      setTitle("");
      setFile("");
      setProgress(0);
      setSelectedImage(null);
      editor?.commands.clearContent(true);
    } else {
      toast.error(response.data.message);
      setIsSaving(false);
    }
  };

  const updatePost = async () => {
    setIsSaving(true);
    const response = await axios.post(`/api/blog/${blogId}`, {
      title,
      imageUrl,
      editorState,
    });
    if (response.status === 201) {
      toast.success(response.data.message);
      setIsSaving(false);
      setEditorState("");
      setImageUrl("");
      setTitle("");
      setFile("");
      setProgress(0);
      editor?.commands.clearContent(true);
    } else {
      toast.error(response.data.message);
      setIsSaving(false);
    }
  };
  return (
    <div className="rounded-lg p-2 flex flex-col gap-4 w-full">
      <div className="flex justify-between cursor-pointer">
        {editor && (
          <div className="w-full flex justify-between ">
            <TipTapMenu editor={editor} />
          </div>
        )}
      </div>
      <div className="prose prose-sm md:prose-lg bg-white/80 focus:bg-gray-50 duration-200 max-w-[840px]">
        <EditorContent editor={editor} />
      </div>
      <div className="flex justify-between">
        <button
          disabled={isLoading}
          className=" flex gap-2 w-fit items-center focus-visible:ring-ring ring-1 ring-white transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 px-4 py-1.5 bg-black text-white text-semibold rounded-xl hover:bg-black/70"
          onClick={handleCompletion}
        >
          <Bot height={20} width={20} />
          <span>{isLoading ? "Completing" : "Autocomplete"}</span>
        </button>
        <button
          type="button"
          onClick={blogId ? updatePost : createPost}
          disabled={isSaving}
          className="flex gap-2 w-fit items-center focus-visible:ring-ring ring-1 ring-white transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 px-4 py-1.5 bg-black/90 text-white text-semibold rounded-xl hover:bg-black/70"
        >
          Save
          {isSaving ? (
            <Loader2 height={20} width={20} className="animate-spin" />
          ) : (
            <SaveIcon height={20} width={20} />
          )}
        </button>
      </div>
    </div>
  );
};

export default TipTapEditor;

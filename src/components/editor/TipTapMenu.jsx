"use client";

import {
  Bold,
  ItalicIcon,
  Code,
  CodepenIcon,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Redo,
  Undo,
} from "lucide-react";

const TipTapMenu = ({ editor }) => {
  return (
    <div className="flex flex-wrap max-md:justify-center gap-1 md:gap-2">
      {/* For bold button */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`
        h-6 w-6
        ${
          editor.isActive("bold")
            ? "is-active bg-gray-500 border rounded-sm"
            : ""
        }`}
      >
        <Bold className="h-6 w-6" />
      </button>

      {/* For Italic button */}
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={` h-6 w-6 ${editor.isActive("italic") ? "is-active" : ""}`}
      >
        <ItalicIcon className="h-6 w-6" />
      </button>

      {/* For code  */}
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={` h-6 w-6 ${editor.isActive("code") ? "is-active" : ""}`}
      >
        <Code className="w-6 h-6" />
      </button>
      {/* For Heading 1 */}
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={` h-6 w-6 ${
          editor.isActive("heading", { level: 1 }) ? "is-active" : ""
        }`}
      >
        <Heading1 className="w-6 h-6" />
      </button>
      {/* For Heading level 2 */}
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={` h-6 w-6 ${
          editor.isActive("heading", { level: 2 }) ? "is-active" : ""
        }`}
      >
        <Heading2 className="w-6 h-6" />
      </button>
      {/* For Heading level 3 */}
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={` h-6 w-6 ${
          editor.isActive("heading", { level: 3 }) ? "is-active" : ""
        }`}
      >
        <Heading3 className="w-6 h-6" />
      </button>

      {/* For un Order list */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={` h-6 w-6 ${
          editor.isActive("bulletList") ? "is-active" : ""
        }`}
      >
        <List className="w-6 h-6" />
      </button>
      {/* For ordered list */}
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={` h-6 w-6 ${
          editor.isActive("orderedList") ? "is-active" : ""
        }`}
      >
        <ListOrdered className="w-6 h-6" />
      </button>
      {/* For writing code */}
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={` h-6 w-6 ${
          editor.isActive("codeBlock") ? "is-active" : ""
        }`}
      >
        <CodepenIcon className="w-6 h-6" />
      </button>
      {/* Undo */}
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="h-6 w-6"
      >
        <Undo className="w-6 h-6" />
      </button>
      {/* Redo */}
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="h-6 w-6"
      >
        <Redo className="w-6 h-6" />
      </button>
    </div>
  );
};

export default TipTapMenu;

"use client";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Home() {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ font: [] }, { size: ["small", "large", "huge"] }],
      // [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["image", "link", "video", "formula"],
      [{ script: "sub" }, { script: "super" }],
      ["code-block"],
      ["clean"],
    ],
  };

  // const formats = [
  //   "font",
  //   "size",
  //   "script",
  //   // "header",
  //   "bold",
  //   "italic",
  //   "underline",
  //   "strike",
  //   "blockquote",
  //   "list",
  //   "bullet",
  //   "indent",
  //   "link",
  //   "image",
  // ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        // formats={formats}
      />
    </main>
  );
}

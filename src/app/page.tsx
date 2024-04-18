"use client";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Home() {
  const [value, setValue] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </main>
  );
}

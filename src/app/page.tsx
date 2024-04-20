"use client";
import React, { useState } from "react";
import QuillEditor from "./_component/Editor";

const MainPage = () => {
  const [value, setValue] = useState("");

  const onEditorChange = (data) => {
    // Handle the updated HTML content
    setValue(data);
    console.log("Editor content changed:", data);
  };

  const onFilesChange = (files) => {
    // Handle the uploaded files
    console.log("Uploaded files:", files);
  };

  return (
    <div>
      <QuillEditor
        placeholder="write something!"
        onEditorChange={onEditorChange}
        onFilesChange={onFilesChange}
      />
    </div>
  );
};

export default MainPage;

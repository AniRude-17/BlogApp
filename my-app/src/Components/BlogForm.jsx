import React from "react";
import { useState } from "react";
import '../css/form.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import QuillPanel from "./QuillPanel";

export const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be empty");
    }
    console.log(title,desc);
  };
  return (
    <div className="form">
      <form onSubmit={submit} className="blogForm">
        <label htmlFor="title" className="formLabel">Blog Title</label>
        <input
          type="text"
          className="formInput"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Enter Title"
        />
        <label htmlFor="desc" className="formLabel">Blog Description</label>
        <QuillPanel />
        <button id="btn">Post</button>
      
      </form>
    </div>
  );
};

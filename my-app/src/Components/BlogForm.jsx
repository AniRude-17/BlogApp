import React from "react";
import { useState } from "react";
import '../css/form.css'
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
        <textarea
          name=""
          className="formInput"
          id="desc"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          cols="70"
          rows="20"
          placeholder="Enter Description"
        ></textarea>
        <button id="btn">Post</button>
      </form>
    </div>
  );
};

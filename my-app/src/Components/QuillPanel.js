import React from "react";
 import ReactQuill from 'react-quill';
 import 'react-quill/dist/quill.snow.css';

 function QuillPanel() {
  const modules = {
    toolbar: [
      [{ size: [] }],
      ['bold', 'italic', 'underline'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }

   return (
     <ReactQuill theme="snow" modules={modules}></ReactQuill>
   );
 }

 export default QuillPanel;
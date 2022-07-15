import React from "react";
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function QuillPanel () {


  return(

    <div>
      <ReactQuill placeholder="Start your Story..."/>
    </div>
  );

}

export default QuillPanel;
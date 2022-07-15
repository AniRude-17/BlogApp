import React from 'react'
import { useState } from "react";
import '../../css/Blogpage.css'
const BRC_Searchbar = () => {

    const [input, setInput]=useState("");

    const handleSubmit=(event) => {
        event.preventDefault();
        console.log(input);
    }

    return ( 
        <div className='BRC_Searchform_Box'>
        <form onSubmit={handleSubmit} className='BRC_Searchform'>
            <input
                type="text"
                value={input}
                onChange={(event) => {setInput(event.target.value)}}
                placeholder="Enter a Keyword and hit Enter"
                className='BRC_SearchBar'
            />

        </form>
    </div>
     );
}
 
export default BRC_Searchbar;
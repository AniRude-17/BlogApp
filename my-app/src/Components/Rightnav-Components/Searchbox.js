import React from 'react'
import { useState } from "react";
import '../../css/RightNav.css';

const Searchbox = () => {

    const [input, setInput]=useState("");

    const handleSubmit=(event) => {
        event.preventDefault();
        console.log(input);
    }


    return ( 
        <div>
            <form onSubmit={handleSubmit} className='SearchForm'>
                <input
                    type="text"
                    value={input}
                    onChange={(event) => {setInput(event.target.value)}}
                    placeholder="Enter a Keyword and hit Enter"
                    className='SearchBar'
                />

            </form>
        </div>
     );
}
 
export default Searchbox;
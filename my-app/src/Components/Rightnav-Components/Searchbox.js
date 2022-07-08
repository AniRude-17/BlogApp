import React from 'react'
import { useState } from "react";


const Searchbox = () => {

    const [input, setInput]=useState(" ");

const handleSubmit=(event) => {
    event.preventDefault();
    console.log(input);
}


    return ( 
        <div className="search-bar-block">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(event) => {setInput(event.target.value)}}
                    placeholder='Enter a Keyword and hit Enter'
                    
                />

            </form>
        </div>
     );
}
 
export default Searchbox;
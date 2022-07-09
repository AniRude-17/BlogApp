import React from 'react'


let catagories=["cat1", "cat2", "cat3", "cat4"];
const Catagories = () => {
    return ( 
        <div className="catagories-block">
            <ul className="catagories-list-style">
                {catagories.map((item) => {
                    return(
                       
                        <li className="catagories-list-item" key="1">
                            {item}
                        </li>
                 
                    )
                    
                })}
            </ul>
            
        
        </div>
     );
}
 
export default Catagories;
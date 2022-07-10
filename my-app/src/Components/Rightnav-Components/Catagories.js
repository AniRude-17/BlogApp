import React from 'react'


let catagories=["Campus Life", "Internships", "Travel", "Food"];
const Catagories = () => {
    return ( 
        <div className="catagories-block">
            <ul className="catagories-list-style">
                {catagories.map((item) => {
                    return(
                       
                        <li className="catagories-list-item" key="1">
                            {item}
                            <hr />
                        </li>
                 
                    )
                    
                })}
            </ul>
            
        
        </div>
     );
}
 
export default Catagories;
import React from 'react'
import '../../css/RightNav.css';

let topTags=["Computers","Machine Learning","IIT Indore","Technology","Unique","React","Puzzles","Wonderful"];
const Tagcloud = () => {
    return ( 
        <div className="tag-cloud-block">
            <ul className="tag-cloud-list-style">
                {topTags.map((tag) => {
                    return(
                       
                        <li className="tag-cloud-list-item" key="1">
                            <a href='#' className='tag-cloud-links'>{tag}</a>
                        </li>
                 
                    )
                    
                })}
            </ul>
            
        
        </div>
     );
}
 
export default Tagcloud;
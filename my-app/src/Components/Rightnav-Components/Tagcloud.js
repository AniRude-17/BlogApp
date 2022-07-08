import React from 'react'

let topTags=["aa", "bb", "CC", "DD", "DD", "DD", "DD", "DD", "DD"];
const Tagcloud = () => {
    return ( 
        <div className="tag-cloud-block">
            <ul className="tag-cloud-list-style">
                {topTags.map((tag) => {
                    return(
                       
                        <li className="tag-cloud-list-item" key="1">
                            tag
                        </li>
                 
                    )
                    
                })}
            </ul>
            
        
        </div>
     );
}
 
export default Tagcloud;
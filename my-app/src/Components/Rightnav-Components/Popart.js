import React from 'react'
import {Rightnav_blogprev} from './Rightnav_blogprev'
let props=[{ headline:"My First Article!!" , content:"abcd efgh ijkl mnop qrst", date:"12/7/2020" , writer:"Jon Snow"}, { headline:"My First Article!!" , content:"abcd efgh ijkl mnop qrst", date:"12/7/2020" , writer:"Jon Snow"}, { headline:"My First Article!!" , content:"abcd efgh ijkl mnop qrst", date:"12/7/2020" , writer:"Jon Snow"} ]
export const Popart = () => {
    return (
        
        <div className="Popart-box">
            
            {props.map((article) => {
            return(
                <Rightnav_blogprev
                    props={article}
                />
                
                
            )
            
        })}
        </div>
    );
    
}
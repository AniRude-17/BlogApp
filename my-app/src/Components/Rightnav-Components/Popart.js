import React from 'react'
import {Rightnav_blogprev} from './Rightnav_blogprev'
let props=[{ headline:"My First Article!!w f wkj f fwkjfw fmn wf fwkjfnwkfjnw" , content:"The Great Blue Planet", date:"12/7/2020" , writer:"Jon Snow"},{headline:"My second Article!!  Lorem ipsum dolor sit amet, consectetur adipisicing elit." , content:"Time as we know, a uni.....", date:"12/7/2020" , writer:"Jon Snow"},{ headline:"My Third Article!!" , content:"The Great Blue Planet", date:"12/7/2020" , writer:"Jon Snow"},  ]

export const Popart = () => {
    
    return (
        

        <div className="Popart-box">
            
            {props.map((article) => (
                    
                    <Rightnav_blogprev
                        props={article}
                         
                    />
            

            ))}

        </div>
    );
    
    
}

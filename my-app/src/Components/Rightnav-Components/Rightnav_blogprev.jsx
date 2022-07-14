import React from 'react'
import "../../css/RightNav.css"

export const Rightnav_blogprev = (props) => {

    return(
        <div className="Blogbox">
            
{ /* src={props.thumbnail} : for final development !!  */}
            <div className="main-showcase">
                <img className="Thumbnail-image" src="http://unsplash.it/250/250?gravity=center" />
                <div className="blog-headline-box">{props.props.headline}</div>
            </div>
            <div className="blog-extrainfo-box">
                <p className="extrainfo-line">
                    
                </p>
            </div>
            
        </div>

            
            
    )
};



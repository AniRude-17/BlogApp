import React from 'react'
import "../../css/RightNav.css"

export const Rightnav_blogprev = (props) => {

    return(
        <div className="Blogbox">
            
{ /* src={props.thumbnail} : for final development !!  */}
            <img className="Thumbnail-image" src="http://unsplash.it/250/250?gravity=center" />
            <div className="blog-headline-box">{props.props.headline}</div>
            <div className="blog-content-box">{props.props.content}</div>
            <div className="blog-extrainfo-box">
                <div className="date-posted-box">
                    {/* <image className="calander-icon" src="http://unsplash.it/250/250?gravity=center" /> */}
                    <p className="date">{props.date}</p>
                </div>
                <div className="written-by-box">
                {/* <image className="person-icon" src="http://unsplash.it/250/250?gravity=center" /> */}
                    <p className="writer">{props.props.writer}</p>
                </div>
            </div>
            
        </div>

            
            
    )
};



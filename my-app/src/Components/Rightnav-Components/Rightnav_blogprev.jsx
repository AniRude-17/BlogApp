import React from 'react'
import "../../css/RightNav.css"

export const Rightnav_blogprev = (props) => {

    return(
        <div className="Blogbox">
            
{ /* src={props.thumbnail} : for final development !!  */}
            <div className="main-showcase-left">
                <img className="Thumbnail-image" src="http://unsplash.it/250/250?gravity=center" />
            </div>
            <div className="main-showcase-right">
                <div className="blog-title-box">
                    {props.props.headline}
                </div>
                <div className="extra-info-box">
                    <span>
                        <i class="fa fa-user"></i>
                    </span>
                    <span>
                    <i class="fa fa-calendar"></i>3 June, 2020
                    </span>

                </div>
            </div>
        </div>
            
            
    )
};



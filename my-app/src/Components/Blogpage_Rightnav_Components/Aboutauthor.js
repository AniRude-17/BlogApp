import React from 'react'
import '../../css/Blogpage.css'
const Aboutauthor1 = () => {
    return ( 
        <div className="AuthorBox">
            <div className="ProfileImageBox">
                <img className="ProfileImage" src="http://unsplash.it/250/250?gravity=center" />
            </div>
            <div className="NameBox">
                Andrea Moore
                {/* {props.name} */}
            </div>
            <div className="AboutMe">
                I'm Andrea Moore a Scotish Blogger and Explorer.A small river named Duden flows by their place and supplies it with the necessary regelialia.
                {/* {props.about} */}
            </div>
            {/* <div className="FollowButtonBox">
                <button className="Follow" onClick={HandleFollowRequest}> Follow </button>
            </div>

            <div className="MoreArticlesByAuthorBox">
            More Articles By Author props.name
                
            </div> */}
            
        </div>
     );
}
 
export default Aboutauthor1;
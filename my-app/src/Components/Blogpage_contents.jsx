import React from 'react'
import "../css/Blogpage.css"

let props=[{img:"http://unsplash.it/250/250?gravity=center", uname:"Haxxor",time:8, svg:"http://unsplash.it/700/300?gravity=center",datep:"21 Oct,2020", title:"A Loving Heart is the Truest Wisdom",contents:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia."}]
export const Blogpage_contents = () => {
  return (
    <div class="contents">
      {props.map((contents) => (
                    <div class="struct">
                    <div class="header">
                    <div className="profile_contents">
                    <img
                    className="profile_img"
                    src={contents.img}
                    />
                    <div className="blog-prev-contents">
                      <h3 className="head3">
                        <a href="" className="profile_link">
                          {contents.uname}
                        </a>
                      </h3>
                      <div class="meta-wrap">
                        <p className="meta">
                          <span className="meta-indv">
                            <span class="material-icons">&#xebcc;</span>
                            {contents.datep}
                          </span>
                          <span href="#" className="meta-indv">
                            <span class="material-icons">&#xe425;</span>
                            {contents.time} mins
                          </span>
                        </p>
                      </div>
                    </div>
                    </div>
                    <a href="" class="bookmark-icon">
                        <span class="material-icon">&#xe598;</span>
                      </a>
                    </div>
                    <div class="blog">
                    <div class="blog-title">
                        {contents.title}
                    </div>
                    <div class="blog-contents">
                        {contents.contents}
                    </div>
                    <img src={contents.svg}></img>
                    </div>
                    </div>
            ))}
    </div>
  )
};

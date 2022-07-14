import React from "react";
import "../css/blogpreview.css";
let props=[{title:"A Loving Heart is the Truest Wisdom", datep:"July 9, 2022", tag:"Travel", num:"50", content:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",img:"http://unsplash.it/250/250?gravity=center"},
          {title:"Great Things Never Came from Comfort Zone", datep:"June 28, 2019", tag:"Travel", num:"69",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia.",img:"http://unsplash.it/250/250?gravity=center"},
          {title:"Great Things Never Came from Comfort Zone", datep:"June 28, 2019", tag:"Travel", num:"69",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia.",img:"http://unsplash.it/250/250?gravity=center"},
          {title:"Great Things Never Came from Comfort Zone", datep:"June 28, 2019", tag:"Travel", num:"69",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia.",img:"http://unsplash.it/250/250?gravity=center"}]
export const Blogprev = () => {
  return (
    <div class="prev">
      {props.map((contents) => (
                    <div class="blog" data-aos="fade-up">
                    <img
                      className="thumbnail-image"
                      src={contents.img}
                    />
                    <div className="blog-prev-contents">
                      <h3 className="head3">
                        <a href="" className="blog-link">
                          {contents.title}
                        </a>
                      </h3>
                      <div class="meta-wrap">
                        <p className="meta">
                          <span className="meta-indv">
                            <span class="material-icons">&#xebcc;</span>
                            {contents.datep}
                          </span>
                          <a href="#" className="meta-indv2">
                            <span class="material-icons">&#xe2c7;</span>
                            {contents.tag}
                          </a>
                          <span className="meta-indv">
                            <span class="material-icons">&#xe0b9;</span>
                            {contents.num} Comment
                          </span>
                        </p>
                      </div>
                      <div className="blog-start">
                        {contents.content}
                      </div>
                      <a href="" className="blog-rdmore">
                        Read More {">"}
                      </a>
                    </div>
                  </div>
            ))}
    </div>
  );
};

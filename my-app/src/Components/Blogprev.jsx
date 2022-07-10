import React from 'react'
import '../css/blogpreview.css'
let title = "A Loving Heart is the Truest Wisdom"
let datep = "July 9, 2022"
let tag = "Travel"
let num = "50"
export const Blogprev = () => {
    return(
        <div class='prev'>
            <div class='blog'>
                <img className="thumbnail-image" src="http://unsplash.it/250/250?gravity=center"/>
                <div className='blog-prev-contents'>
                    <h3 className='head3'>
                        <a href="" className='blog-link'>{title}</a>
                        </h3>
                    <div class="meta-wrap">
                    <p className='meta'>
                        <span className='meta-indv'><span class="material-icons">
                        &#xebcc;
                        </span>{datep}</span>
                        <a href="#" className='meta-indv2'><span class="material-icons">
                        &#xe2c7;
                        </span>{tag}</a>
                        <span className='meta-indv'><span class="material-icons">
                        &#xe0b9;
                        </span>{num} Comment</span>
                        </p>
                        </div>
                    <div className='blog-start'>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </div>
                    <a href="" className='blog-rdmore'>
                        Read More {'>'} 
                    </a>
                    </div>
                </div>
            <div class='blog'>
                <img className="thumbnail-image" src="http://unsplash.it/250/250?gravity=center"/>
                <div className='blog-prev-contents'>
                    <h3 className='head3'>
                        <a href="" className='blog-link'>{title}</a>
                        </h3>
                    <div class="meta-wrap">
                    <p className='meta'>
                        <span className='meta-indv'><span class="material-icons">
                        &#xebcc;
                        </span>{datep}</span>
                        <a href="#" className='meta-indv2'><span class="material-icons">
                        &#xe2c7;
                        </span>{tag}</a>
                        <span className='meta-indv'><span class="material-icons">
                        &#xe0b9;
                        </span>{num} Comment</span>
                        </p>
                        </div>
                    <div className='blog-start'>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </div>
                    <a href="" className='blog-rdmore'>
                        Read More {'>'} 
                    </a>
                    </div>
                </div>
            <div class='blog'>
                <img className="thumbnail-image" src="http://unsplash.it/250/250?gravity=center"/>
                <div className='blog-prev-contents'>
                    <h3 className='head3'>
                        <a href="" className='blog-link'>{title}</a>
                        </h3>
                    <div class="meta-wrap">
                    <p className='meta'>
                        <span className='meta-indv'><span class="material-icons">
                        &#xebcc;
                        </span>{datep}</span>
                        <a href="#" className='meta-indv2'><span class="material-icons">
                        &#xe2c7;
                        </span>{tag}</a>
                        <span className='meta-indv'><span class="material-icons">
                        &#xe0b9;
                        </span>{num} Comment</span>
                        </p>
                        </div>
                    <div className='blog-start'>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </div>
                    <a href="" className='blog-rdmore'>
                        Read More {'>'} 
                    </a>
                    </div>
                </div>
            </div>
    )
}
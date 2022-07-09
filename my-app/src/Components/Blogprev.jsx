import React from 'react'
import '../css/blogpreview.css'
let title = "A Loving Heart is the Truest Wisdom"
let datep = "July 9, 2022"
export const Blogprev = () => {
    return(
        <div className='prev'>
            <div className='blog'>
                <img className="thumbnail-image" src="http://unsplash.it/250/250?gravity=center"/>
                <div className='blog-prev-contents'>
                    <h3 className='head3'>
                        <a href="" className='blog-link'>{title}</a>
                        </h3>
                    <div class="meta-wrap">
                    <p className='meta'><span class="material-icons">
                        &#xebcc;
                        </span><span className='meta-text'>{datep}</span></p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
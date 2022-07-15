import React from 'react'
import '../css/Blogpage.css'
import BRC_Searchbar from './Blogpage_Rightnav_Components/BRC_Searchbar';
import Aboutauthor1 from './Blogpage_Rightnav_Components/Aboutauthor';
export const Blogpage_Rightnav = () => {
    return (
        <div className="Rightnav_Box">
            <div className="Rightnav_Components">
                <BRC_Searchbar />
                <div>
                    <Aboutauthor1 />
                </div>
            </div>
        </div>
    );
}
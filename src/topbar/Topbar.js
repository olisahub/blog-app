import React from "react";
import './Topbar.css';
import {FaFacebook,FaTwitter,FaPinterest,FaInstagram, FaSearch} from "react-icons/fa";


function Topbar() {
    return(
        <div className="top">
            <div className="topLeft">
            <FaFacebook />
            <FaTwitter />
            <FaPinterest />
            <FaInstagram />
            </div>
            <div className="topCenter">
                <div className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </div>
            </div>
            <div className="topRight">
                <img className="topimg" src="https://us.123rf.com/450wm/curaphotography/curaphotography1306/curaphotography130600005/20047790-natural-portrait-of-a-handsome-young-businessman.jpg?ver=6" alt="" />
            </div>
            <div className="topRight">
            <FaSearch />
            </div>
        </div>
    )
}
export default Topbar

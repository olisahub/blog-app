import React from "react";
import './Header.css';


function Header () {
       return(
           <div className="header">
            <div className="headerTitles">
                <span className="headerTitlesSm">Mamacita Info</span>
                <span className="headerTitlesLg">la Blog</span>
            </div>
            <img className="headerImg" src="https://cdn.bhdw.net/im/valentine-s-day-lovely-heart-in-the-hands-behang-13581_w635.jpg" alt="" />
           </div>
       )
}
export default Header



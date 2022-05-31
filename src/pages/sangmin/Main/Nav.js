import React from "react";

class Nav extends React.Component{
    render(){
        return(
            <nav className="nav-class">
                <div className="nav-box">
                    <div className="nav-logo-box">
                        <span className="nav-logo">Justgram</span>
                    </div>
                    <div className="search-box">
                        <input className="search" type="text" placeholder="검색" />
                    </div>
                    <div className="menu-box">
                        <img className="explore-img" src="images/sangmin/explore.png" alt="explore" />
                        <img className="heart-img" src="images/sangmin/heart.png" alt="heart" />
                        <img className="profile-img" src="images/sangmin/profile.png" alt="profile" />
                    </div>
                </div>

            </nav>
        );
    }
}

export default Nav;
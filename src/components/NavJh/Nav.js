import { Link } from "react-router-dom";
import "./Nav.scss";
import "../../styles/variables.scss";

function Nav() {
  return (
    <div className="nav">
      <nav className="navbar">
        <div className="navbarLeft1">
          <div className="navbarLeft1Inner">
            <Link to="/" className="navbarItem logoImg">
              <img
                alt="logoIcon"
                className="navIcon"
                src="/images/Jeonghoon/logo.png"
              />
            </Link>
            <Link to="/" className="navbarItem logoFont">
              Justgram
            </Link>
          </div>
        </div>
        <div className="navbarLeft2">
          <div className="searchWrapper navbarItem">
            <img alt="searchIcon" src="/images/jeonghoon/search.png" />
            <input placeholder="검색" />
          </div>
        </div>
        <div className="navbarRight">
          <Link to="/" className="navbarItem">
            <img
              alt="exploreIcon"
              className="navIcon"
              src="/images/jeonghoon/explore.png"
            />
          </Link>
          <Link to="/" className="navbarItem">
            <img
              alt="heartIcon"
              className="navIcon"
              src="/images/jeonghoon/heart.png"
            />
          </Link>
          <Link to="/" className="navbarItem">
            <img
              alt="profileIcon"
              className="navIcon"
              src="/images/jeonghoon/profile.png"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

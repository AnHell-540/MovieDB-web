import { Link, NavLink, useNavigate } from "react-router-dom";
import style from "../style/NavBar.module.css";
import logo from "../../assets/images/logo-navbar.png";

export const NavBar = () => {

  return (
    <div className={style.header}>
      <nav className={style.navbar}>
        
        <div className={style.navbar_div_logo}>
          <Link className={style.link_logo} to="/home">
            <img className={style.logo} src={logo} alt="home navigation logo"  />
          </Link>
        </div>

        <ul className={style.navbar_links}>
          <li> 
          <NavLink className={({ isActive }) => isActive ? style.active_navbar_link : style.navbar_link} to="/home">
            Popular
          </NavLink>
          </li>
          <li> 
          <NavLink className={({ isActive }) => isActive ? style.active_navbar_link : style.navbar_link} to="/top-rated">
            Top Rated
          </NavLink>
          </li>
          <li> 
          <NavLink className={({ isActive }) => isActive ? style.active_navbar_link : style.navbar_link} to="/favorites">
            Favorites
          </NavLink>
          </li>
          <li> 
          <NavLink className={({ isActive }) => isActive ? style.active_navbar_link : style.navbar_link} to="/next-releases">
            Next Releases
          </NavLink>
          </li>
        </ul>
        
      </nav>
    </div>
  );
};

import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <nav>
      <ul className="list">
        <li className="listOrder">
          <NavLink className="fix" to="/">
            Home
          </NavLink>
        </li>
        <li className="listOrder">
          <NavLink className="fix" to="Timer">
            Timer
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
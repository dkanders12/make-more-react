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
        <li className="listOrder">
          <NavLink className="fix" to="Fetch">
            Fetch
          </NavLink>
        </li>
        <li className="listOrder">
          <NavLink className="fix" to="Cart">
            Cart
          </NavLink>
        </li>
        <li className="listOrder">
          <NavLink className="fix" to="Supabase">
            Supabase
          </NavLink>
        </li>

        <li className="listOrder">
          <NavLink className="fix" to="Hygraph">
            Hygraph
          </NavLink>
        </li>
        <li className="listOrder">
          <NavLink className="fix" to="LoginSupa">
            Login Supa
          </NavLink>
        </li>
        <li className="listOrder">
          <NavLink className="fix" to="Signup">
            signup
          </NavLink>
        </li>
        <li className="listOrder">
          <NavLink className="fix" to="FetchSupa">
            Supafetch
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

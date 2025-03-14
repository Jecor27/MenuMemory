import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/foods">Food</NavLink>
            </li>
            <li>
              <NavLink to="/drinks">Drinks</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

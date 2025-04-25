import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
    window.location.href = "/";
  };
  return (
    <header className="header">
      <div className="header__inner">
        <nav className="nav">
          <div className="nav__list">
            <div>
              <NavLink to="/" className="nav__link">
                Home
              </NavLink>
              <NavLink to="/foods" className="nav__link">
                Food
              </NavLink>
              <NavLink to="/drinks" className="nav__link">
                Drinks
              </NavLink>
            </div>
            {!user && (
              <div>
                <NavLink to="/login" className="nav__link">
                  Login
                </NavLink>
                <NavLink to="/signup" className="nav__link">
                  Sign Up
                </NavLink>
              </div>
            )}
            {user && (
              <div>
                <span className="">{user.email}</span>
                <button onClick={handleClick} className="nav__link">
                  Log out
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

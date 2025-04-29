import { NavLink, useNavigate } from "react-router-dom";
import useAuthStore from "../components/store/authStore";

export default function Navbar() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/");
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

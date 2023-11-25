import { Link, useLocation } from "react-router-dom";

import "./Header.scss";
import { checkRoutes } from "../../helpers/helpers";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <img
              src="https://sorobindu.com/wp-content/uploads/2022/03/Sorobindu-logo-1.png"
              alt=""
            />
          </Link>
        </div>
        <nav className="menu">
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={location.pathname === "/blog" ? "active" : ""}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={location.pathname === "/about" ? "active" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
              >
                contact
              </Link>
            </li>
            <li>
              <Link
                to="/admin"
                className={
                  checkRoutes(location.pathname, "admin") ? "active" : ""
                }
              >
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

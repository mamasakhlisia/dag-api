import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../logos/logo_transparent_background.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (id) => (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");

      // Use a slightly longer delay or better: a callback/effect on navigation
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" />
          <span>Dental Academy </span>Georgia
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/masterclasses"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Masterclasses
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className="nav-link"
                onClick={handleScrollTo("about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/doctors"
                className="nav-link"
              >
                Doctors
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-link"
                onClick={handleScrollTo("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
          <a href="#registration" className="btn btn-primary ms-lg-4">
            Register Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import mainlogo1 from "../assets/images/main-logo-1.png";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main-header">

      <div className="header-sticky">

        <nav className="navbar navbar-expand-lg">

          <div className="container">

            {/* Logo */}
            <Link className="navbar-brand" to="/">
              <img src={mainlogo1} alt="Logo" />
            </Link>

            {/* Desktop Menu — OLD DESIGN SAME */}
            <div className="collapse navbar-collapse main-menu">

              <div className="nav-menu-wrapper">

                <ul className="navbar-nav mr-auto" id="menu">

                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/services">
                      Services
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/testimonial">
                      Testimonial
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact Us
                    </Link>
                  </li>

                </ul>

              </div>

              <div className="header-btn">

                <a
                  href="tel:+917094620896"
                  className="btn-default"
                >
                  Enquire now
                </a>

              </div>

            </div>

            {/* MOBILE TOGGLE ONLY */}
            <div className="mobile-toggle">

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`mobile-menu-btn ${menuOpen ? "active" : ""}`}
              >

                <span></span>
                <span></span>
                <span></span>

              </button>

            </div>

          </div>

        </nav>

        {/* MOBILE MENU ONLY */}
        <div className={`mobile-sidebar ${menuOpen ? "show" : ""}`}>

          <div className="mobile-menu-header">

            <h4>Menu</h4>

            <button
              className="close-btn"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>

          </div>

          <ul className="mobile-menu-list">

            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>

            <li>
              <Link to="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>

            <li>
              <Link to="/testimonial" onClick={() => setMenuOpen(false)}>
                Testimonial
              </Link>
            </li>

            <li>
              <Link to="/contact"  onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
            </li>

          </ul>

          <div  className="mobile-contact-btn">

            <a href="tel:+917094620896">
              Enquire Now
            </a>

          </div>

        </div>

        {/* OVERLAY */}
        {menuOpen && (
          <div
            className="mobile-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

      </div>

    </header>
  );
}

export default Header;

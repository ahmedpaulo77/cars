import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleLanguage, t, lang } = useLanguage();

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <div className="logo-badge">GAP</div>
          <div className="logo-text">
            <span>GLOBAL AUTO PARTS</span>
            <small>{t.nav.subTitle}</small>
          </div>
        </Link>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span><span></span><span></span>
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><NavLink to="/" onClick={() => setIsOpen(false)}>{t.nav.home}</NavLink></li>
          <li><NavLink to="/about" onClick={() => setIsOpen(false)}>{t.nav.about}</NavLink></li>
          <li><NavLink to="/products" onClick={() => setIsOpen(false)}>{t.nav.products}</NavLink></li>
          <li><NavLink to="/track-order" onClick={() => setIsOpen(false)}>{t.nav.track}</NavLink></li>
          <li><NavLink to="/request-quote" onClick={() => setIsOpen(false)}>{t.nav.quote}</NavLink></li>
          <li><NavLink to="/contact" className="nav-btn" onClick={() => setIsOpen(false)}>{t.nav.contact}</NavLink></li>
          <li>
            <button
              className="lang-toggle-btn"
              onClick={toggleLanguage}
              aria-label="Toggle language"
              title={lang === "ar" ? "Switch to English" : "التبديل للعربية"}
            >
              <span className="lang-flag">{lang === "ar" ? "🇬🇧" : "🇪🇬"}</span>
              <span className="lang-track">
                <span className={`lang-thumb ${lang === "en" ? "lang-thumb--en" : ""}`}></span>
              </span>
              <span className="lang-label">{lang === "ar" ? "EN" : "AR"}</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
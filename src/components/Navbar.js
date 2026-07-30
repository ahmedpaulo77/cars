import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <div className="logo-badge">GAP</div>
          <div className="logo-text">
            <span>GLOBAL AUTO PARTS</span>
            <small>لاستيراد وتصدير قطع الغيار</small>
          </div>
        </Link>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><NavLink to="/" onClick={() => setIsOpen(false)}>الرئيسية</NavLink></li>
          <li><NavLink to="/about" onClick={() => setIsOpen(false)}>من نحن</NavLink></li>
          <li><NavLink to="/products" onClick={() => setIsOpen(false)}>المنتجات</NavLink></li>
          <li><NavLink to="/track-order" onClick={() => setIsOpen(false)}>تتبع الشحنات</NavLink></li>
          <li><NavLink to="/request-quote" onClick={() => setIsOpen(false)}>طلب تسعير B2B</NavLink></li>
          <li><NavLink to="/contact" className="nav-btn" onClick={() => setIsOpen(false)}>اتصل بنا</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
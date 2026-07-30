import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./Footer.css";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3>GLOBAL AUTO PARTS</h3>
          <p>{t.footer.desc}</p>
        </div>
        <div className="footer-col">
          <h4>{t.footer.quickLinks}</h4>
          <ul>
            <li><Link to="/products">{t.nav.products}</Link></li>
            <li><Link to="/track-order">{t.nav.track}</Link></li>
            <li><Link to="/request-quote">{t.nav.quote}</Link></li>
            <li><Link to="/about">{t.nav.about}</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>{t.footer.contactUs}</h4>
          <p>{t.contact.address}</p>
          <p>{t.contact.phone}</p>
          <p>{t.contact.email}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t.footer.rights} {new Date().getFullYear()} Global Auto Parts</p>
      </div>
    </footer>
  );
}

export default Footer;
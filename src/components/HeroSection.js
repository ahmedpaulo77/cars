import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./HeroSection.css";

function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge">{t.hero.badge}</span>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.desc}</p>
          <div className="hero-actions">
            <Link to="/products" className="btn-primary">{t.hero.btnProducts}</Link>
            <Link to="/request-quote" className="btn-secondary">{t.hero.btnQuote}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

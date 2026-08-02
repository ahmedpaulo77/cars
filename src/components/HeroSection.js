import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import z1 from "../images/z1.jpg";
import "./HeroSection.css";

function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <img
        src={z1}
        alt=""
        className="hero-bg-img"
        aria-hidden="true"
        loading="eager"
      />

      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-fade" aria-hidden="true" />

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
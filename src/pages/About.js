import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./About.css";

function About() {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>{t.about.title}</h1>
          <p>{t.about.subtitle}</p>
        </div>
      </div>

      <div className="container page-body">
        <div className="about-grid">
          <div className="about-text">
            <h2>{t.about.visionTitle}</h2>
            <p>{t.about.visionP1}</p>
            <p>{t.about.visionP2}</p>
          </div>
          <div className="about-features">
            <div className="feature-card">
              <h3>{t.about.feat1Title}</h3>
              <p>{t.about.feat1Desc}</p>
            </div>
            <div className="feature-card">
              <h3>{t.about.feat2Title}</h3>
              <p>{t.about.feat2Desc}</p>
            </div>
            <div className="feature-card">
              <h3>{t.about.feat3Title}</h3>
              <p>{t.about.feat3Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
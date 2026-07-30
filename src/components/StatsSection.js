import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./StatsSection.css";

function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="stats-section">
      <div className="container stats-container">
        <div className="stat-card">
          <h3>+15,000</h3>
          <p>{t.stats.s1}</p>
        </div>
        <div className="stat-card">
          <h3>100%</h3>
          <p>{t.stats.s2}</p>
        </div>
        <div className="stat-card">
          <h3>+25</h3>
          <p>{t.stats.s3}</p>
        </div>
        <div className="stat-card">
          <h3>+500</h3>
          <p>{t.stats.s4}</p>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;

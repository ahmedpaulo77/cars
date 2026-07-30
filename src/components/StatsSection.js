import React from "react";
import "./StatsSection.css";

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container stats-container">
        <div className="stat-card">
          <h3>+15,000</h3>
          <p>قطعة غيار مشحونة</p>
        </div>
        <div className="stat-card">
          <h3>100%</h3>
          <p>قطع أصلية ومكفولة</p>
        </div>
        <div className="stat-card">
          <h3>+25</h3>
          <p>دولة موردة ومصنعة</p>
        </div>
        <div className="stat-card">
          <h3>+500</h3>
          <p>عميل وموزع جملة</p>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
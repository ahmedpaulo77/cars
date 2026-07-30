import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge">الرائدون في التوريد والاستيراد ⚓</span>
          <h1>حلول متكاملة لاستيراد وتصدير قطع غيار السيارات</h1>
          <p>
            نربط تجارتك بأكبر مصانع قطع الغيار العالمية في اليابان، ألمانيا، وكوريا. نوفر شحن مباشر للكميات الكبيرة والجملة بأسعار المصنع وضمان معتمد.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn-primary">تصفح المنتجات</Link>
            <Link to="/request-quote" className="btn-secondary">طلب تسعير حاوية / B2B</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
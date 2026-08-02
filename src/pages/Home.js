import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { useLanguage } from "../context/LanguageContext";
import "./Home.css";

function Home() {
  const { t } = useLanguage();
  const featuredProducts = products.slice(0, 4);

  const [searchBrand, setSearchBrand] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  const processSteps = [
    { title: t.process.step1Title, desc: t.process.step1Desc, icon: "📝" },
    { title: t.process.step2Title, desc: t.process.step2Desc, icon: "🤝" },
    { title: t.process.step3Title, desc: t.process.step3Desc, icon: "🔍" },
    { title: t.process.step4Title, desc: t.process.step4Desc, icon: "🚢" },
    { title: t.process.step5Title, desc: t.process.step5Desc, icon: "📦" },
  ];

  const faqItems = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Quick Finder */}
      <section className="quick-finder-section">
        <div className="container">
          <div className="finder-box">
            <h3>{t.home.finderTitle}</h3>
            <div className="finder-inputs">
              <select onChange={(e) => setSearchBrand(e.target.value)}>
                <option value="">{t.home.finderBrand}</option>
                <option value="Toyota">Toyota</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Nissan">Nissan</option>
                <option value="Kia">Kia</option>
                <option value="Chevrolet">Chevrolet</option>
              </select>

              <input
                type="text"
                placeholder={t.home.finderModel}
                onChange={(e) => setSearchModel(e.target.value)}
              />

              <Link
                to={`/products?brand=${searchBrand}&model=${searchModel}`}
                className="btn-primary finder-btn"
              >
                {t.home.finderBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats */}
      <StatsSection />

      {/* 4. Featured Products */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>{t.home.featuredTitle}</h2>
            <p>{t.home.featuredDesc}</p>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="view-more-container">
            <Link to="/products" className="btn-secondary">
              {t.home.viewAll} ←
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Us */}
      <section className="why-us-section">
        <div className="container">
          <div className="section-header">
            <h2>{t.home.whyTitle}</h2>
            <p>{t.home.whyDesc}</p>
          </div>

          <div className="why-us-grid">
            <div className="why-card">
              <div className="why-icon">🚢</div>
              <h3>{t.home.why1Title}</h3>
              <p>{t.home.why1Desc}</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🛡️</div>
              <h3>{t.home.why2Title}</h3>
              <p>{t.home.why2Desc}</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💰</div>
              <h3>{t.home.why3Title}</h3>
              <p>{t.home.why3Desc}</p>
            </div>
            <div className="why-card">
              <div className="why-icon">📑</div>
              <h3>{t.home.why4Title}</h3>
              <p>{t.home.why4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEW: How It Works / Process */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>{t.process.title}</h2>
            <p>{t.process.desc}</p>
          </div>

          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="process-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {index !== processSteps.length - 1 && (
                  <div className="process-line"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Supported Brands */}
      <section className="brands-section">
        <div className="container">
          <h3>{t.home.brandsTitle}</h3>
          <div className="brands-logos">
            <div className="brand-item">TOYOTA</div>
            <div className="brand-item">HYUNDAI</div>
            <div className="brand-item">NISSAN</div>
            <div className="brand-item">KIA</div>
            <div className="brand-item">CHEVROLET</div>
            <div className="brand-item">MITSUBISHI</div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>{t.home.testimonialsTitle}</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>{t.home.t1}</p>
              <h4>{t.home.t1Author}</h4>
            </div>
            <div className="testimonial-card">
              <p>{t.home.t2}</p>
              <h4>{t.home.t2Author}</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 9. NEW: FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>{t.faq.title}</h2>
            <p>{t.faq.desc}</p>
          </div>

          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${openFaq === index ? "open" : ""}`}
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                <div className="faq-question">
                  <span>{item.q}</span>
                  <span className="faq-toggle">{openFaq === index ? "−" : "+"}</span>
                </div>
                {openFaq === index && <p className="faq-answer">{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2>{t.home.ctaTitle}</h2>
          <p>{t.home.ctaDesc}</p>
          <div className="cta-buttons">
            <Link to="/request-quote" className="btn-primary">
              {t.home.ctaBtn1}
            </Link>
            <Link to="/contact" className="btn-secondary dark-btn">
              {t.home.ctaBtn2}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
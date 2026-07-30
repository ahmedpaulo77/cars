import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import "./Home.css";

function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home-page">
      <HeroSection />
      <StatsSection />

      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>أحدث قطع الغيار المتاحة</h2>
            <p>قطع غيار أصلية ومكفولة مستوردة مباشرة من المصنعين</p>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="view-more-container">
            <Link to="/products" className="btn-secondary">
              عرض جميع المنتجات
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <h2>هل تبحث عن استيراد شحنات كبيرة لتجارتك؟</h2>
          <p>نوفر خيارات شحن واستيراد خاصة للتجار والموزعين بأسعار تنافسية.</p>
          <Link to="/request-quote" className="btn-primary">
            طلب تسعير جملة (B2B)
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
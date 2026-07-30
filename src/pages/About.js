import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>من نحن</h1>
          <p>شريكك الموثوق في عالم استيراد وتوريد قطع غيار السيارات</p>
        </div>
      </div>

      <div className="container page-body">
        <div className="about-grid">
          <div className="about-text">
            <h2>رؤيتنا ورسالتنا</h2>
            <p>
              نحن شركة متخصصة في استيراد وتصدير قطع غيار السيارات الأصلية والتجارية عالية الجودة. نربط السوق المحلي بأكبر المصنعين والموردين حول العالم في اليابان، ألمانيا، كوريا، والصين.
            </p>
            <p>
              نهدف إلى تقديم حلول سريعة وموثوقة لتجار الجملة، الموزعين، وصاحبي الورش من خلال تقديم أفضل الأسعار وضمان الجودة والشحن الآمن.
            </p>
          </div>
          <div className="about-features">
            <div className="feature-card">
              <h3>جودة مضمونة</h3>
              <p>فحص دقيق لجميع القطع قبل الشحن لضمان مطابقتها للمواصفات القياسية.</p>
            </div>
            <div className="feature-card">
              <h3>شحن سريع</h3>
              <p>شراكات لوجستية عالمية تضمن وصول شحناتك في الوقت المحدد.</p>
            </div>
            <div className="feature-card">
              <h3>أسعار تنافسية</h3>
              <p>عقود مباشرة مع المصانع تضمن لك أفضل هامش ربح لتجارتك.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
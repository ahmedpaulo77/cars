import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3>GLOBAL AUTO PARTS</h3>
          <p>
            شركتكم المتخصصة الأولى في استيراد وتصدير قطع غيار السيارات أصلية وتجارية مباشرة من أفضل المصنعين عالمياً.
          </p>
        </div>
        <div className="footer-col">
          <h4>روابط سريعة</h4>
          <ul>
            <li><Link to="/products">كتالوج المنتجات</Link></li>
            <li><Link to="/track-order">تتبع البولصات والشحنات</Link></li>
            <li><Link to="/request-quote">طلب تسعير جملة</Link></li>
            <li><Link to="/about">عن الشركة</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>تواصل معنا</h4>
          <p>القاهرة، المنطقة اللوجستية والشحن</p>
          <p>هاتف: 01000000000</p>
          <p>إيميل: import@globalautoparts.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>جميع الحقوق محفوظة © {new Date().getFullYear()} Global Auto Parts</p>
      </div>
    </footer>
  );
}

export default Footer;
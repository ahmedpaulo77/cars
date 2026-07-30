import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>تواصل معنا</h1>
          <p>فريقنا جاهز للرد على جميع استفساراتكم وحجز الشحنات</p>
        </div>
      </div>

      <div className="container page-body">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>معلومات الاتصال</h2>
            <p>
              <strong>العنوان:</strong> المنطقة اللوجستية، القاهرة، مصر
            </p>
            <p>
              <strong>الهاتف:</strong> +20 100 000 0000
            </p>
            <p>
              <strong>البريد الإلكتروني:</strong> info@globalautoparts.com
            </p>
            <p>
              <strong>ساعات العمل:</strong> الأحد - الخميس: 9:00 ص - 6:00 م
            </p>
          </div>

          <div className="contact-form-container">
            <h2>أرسل لنا رسالة</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="الاسم الكامل" required />
              <input type="email" placeholder="البريد الإلكتروني" required />
              <input type="text" placeholder="موضوع الرسالة" required />
              <textarea placeholder="رسالتك..." rows="5" required></textarea>
              <button type="submit" className="btn-primary">
                إرسال
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
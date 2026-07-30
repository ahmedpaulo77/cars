import React, { useState } from "react";
import "./RequestQuote.css";

function RequestQuote() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    phone: "",
    partType: "",
    quantity: "",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم استلام طلب التسعير بنجاح، سيقوم فريق المبيعات بالتواصل معك.");
  };

  return (
    <div className="quote-page">
      <div className="page-header">
        <div className="container">
          <h1>طلب تسعير شحنة (B2B)</h1>
          <p>مخصص للتجار والمستوردين للطلبات الكبيرة والكميات</p>
        </div>
      </div>

      <div className="container page-body">
        <form onSubmit={handleSubmit} className="quote-form">
          <div className="form-group">
            <label>اسم الشركة / المحل:</label>
            <input
              type="text"
              required
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>اسم المسؤول:</label>
            <input
              type="text"
              required
              onChange={(e) =>
                setFormData({ ...formData, contactName: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>رقم الهاتف / الواتساب:</label>
            <input
              type="tel"
              required
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>نوع قطع الغيار المطلوبة:</label>
            <input
              type="text"
              placeholder="مثال: فلاتر زيت كيا وهيونداي"
              required
              onChange={(e) =>
                setFormData({ ...formData, partType: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>الكمية المتوقعة:</label>
            <input
              type="number"
              placeholder="عدد القطع أو الحاويات"
              required
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>تفاصيل أخرى / ملاحظات:</label>
            <textarea
              rows="4"
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
            ></textarea>
          </div>
          <button type="submit" className="btn-primary">
            إرسال طلب التسعير
          </button>
        </form>
      </div>
    </div>
  );
}

export default RequestQuote;
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./RequestQuote.css";

function RequestQuote() {
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t.quote.alertMsg);
  };

  return (
    <div className="quote-page">
      <div className="page-header">
        <div className="container">
          <h1>{t.quote.title}</h1>
          <p>{t.quote.subtitle}</p>
        </div>
      </div>

      <div className="container page-body">
        <form onSubmit={handleSubmit} className="quote-form">
          <div className="form-group">
            <label>{t.quote.company}</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>{t.quote.name}</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>{t.quote.phone}</label>
            <input type="tel" required />
          </div>
          <div className="form-group">
            <label>{t.quote.partType}</label>
            <input type="text" placeholder={t.quote.partPlaceholder} required />
          </div>
          <div className="form-group">
            <label>{t.quote.quantity}</label>
            <input type="text" placeholder={t.quote.qtyPlaceholder} required />
          </div>
          <div className="form-group">
            <label>{t.quote.notes}</label>
            <textarea rows="4"></textarea>
          </div>
          <button type="submit" className="btn-primary">
            {t.quote.submitBtn}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RequestQuote;
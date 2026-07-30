import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Contact.css";

function Contact() {
  const { t } = useLanguage();

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>{t.contact.title}</h1>
          <p>{t.contact.subtitle}</p>
        </div>
      </div>

      <div className="container page-body">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>{t.contact.infoTitle}</h2>
            <p>{t.contact.address}</p>
            <p>{t.contact.phone}</p>
            <p>{t.contact.email}</p>
            <p>{t.contact.hours}</p>
          </div>

          <div className="contact-form-container">
            <h2>{t.contact.formTitle}</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder={t.contact.namePlace} required />
              <input type="email" placeholder={t.contact.emailPlace} required />
              <input type="text" placeholder={t.contact.subjectPlace} required />
              <textarea placeholder={t.contact.msgPlace} rows="5" required></textarea>
              <button type="submit" className="btn-primary">
                {t.contact.sendBtn}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
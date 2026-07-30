import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./WhatsAppButton.css";

// ← غيّر الرقم ده لرقمك الحقيقي (كود الدولة بدون +)
const WHATSAPP_NUMBER = "201000000000";

function WhatsAppButton() {
  const { lang } = useLanguage();
  const [hovered, setHovered] = useState(false);

  const message = lang === "ar"
    ? "مرحباً، أريد الاستفسار عن قطع الغيار 🚗"
    : "Hello, I'd like to inquire about auto parts 🚗";

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const tooltip = lang === "ar" ? "تواصل معنا عبر واتساب" : "Chat with us on WhatsApp";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-fab ${hovered ? "whatsapp-fab--hovered" : ""}`}
      aria-label={tooltip}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Pulse rings */}
      <span className="wa-pulse wa-pulse--1" />
      <span className="wa-pulse wa-pulse--2" />

      {/* WhatsApp SVG icon */}
      <svg
        className="wa-icon"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="16" fill="#25D366" />
        <path
          d="M22.9 9.1A9.7 9.7 0 0 0 16 6.3a9.75 9.75 0 0 0-8.44 14.6L6.3 25.7l4.93-1.29A9.74 9.74 0 0 0 16 25.7a9.75 9.75 0 0 0 6.9-16.6zm-6.9 15a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.07.8.82-3-.2-.31A8.1 8.1 0 1 1 16 24.1zm4.45-6.07c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06a6.57 6.57 0 0 1-1.93-1.19 7.24 7.24 0 0 1-1.34-1.66c-.14-.24 0-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.57.18 1.1.15 1.51.09.46-.07 1.43-.58 1.63-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28z"
          fill="#fff"
        />
      </svg>

      {/* Tooltip */}
      <span className="wa-tooltip">{tooltip}</span>
    </a>
  );
}

export default WhatsAppButton;

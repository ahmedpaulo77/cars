import React, { useState } from "react";
import "./TrackOrder.css";

function TrackOrder() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [status, setStatus] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    // محاكاة نتيجة تتبع الشحنة
    setStatus({
      id: trackingNumber,
      state: "في الطريق إلى الميناء",
      origin: "ميناء ميناء غوانزو (الصين)",
      destination: "ميناء الإسكندرية (مصر)",
      estimatedDelivery: "15 أغسطس 2026",
    });
  };

  return (
    <div className="track-page">
      <div className="page-header">
        <div className="container">
          <h1>تتبع الشحنات والاستيراد</h1>
          <p>أدخل رقم الشحنة أو بوليصة الشحن لمتابعة خط سير طلبك</p>
        </div>
      </div>

      <div className="container page-body">
        <form onSubmit={handleTrack} className="track-form">
          <input
            type="text"
            placeholder="أدخل رقم البوليصة / الشحنة (مثال: TRK-9982)"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary">
            تتبع الآن
          </button>
        </form>

        {status && (
          <div className="status-result">
            <h3>تفاصيل الشحنة رقم: {status.id}</h3>
            <div className="status-timeline">
              <div className="status-item">
                <strong>الحالة الحالية:</strong> {status.state}
              </div>
              <div className="status-item">
                <strong>بلد القيام:</strong> {status.origin}
              </div>
              <div className="status-item">
                <strong>الوجهة:</strong> {status.destination}
              </div>
              <div className="status-item">
                <strong>الوصول المتوقع:</strong> {status.estimatedDelivery}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TrackOrder;
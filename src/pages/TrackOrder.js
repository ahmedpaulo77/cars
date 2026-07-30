import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./TrackOrder.css";

function TrackOrder() {
  const { t } = useLanguage();
  const [trackingNumber, setTrackingNumber] = useState("");
  const [status, setStatus] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setStatus({
      id: trackingNumber,
      state: t.track.defaultState,
      origin: t.track.defaultOrigin,
      destination: t.track.defaultDest,
      estimatedDelivery: t.track.defaultDate,
    });
  };

  return (
    <div className="track-page">
      <div className="page-header">
        <div className="container">
          <h1>{t.track.title}</h1>
          <p>{t.track.subtitle}</p>
        </div>
      </div>

      <div className="container page-body">
        <form onSubmit={handleTrack} className="track-form">
          <input
            type="text"
            placeholder={t.track.placeholder}
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary">
            {t.track.btn}
          </button>
        </form>

        {status && (
          <div className="status-result">
            <h3>{t.track.resultTitle} {status.id}</h3>
            <div className="status-timeline">
              <div className="status-item">
                <strong>{t.track.state}</strong> {status.state}
              </div>
              <div className="status-item">
                <strong>{t.track.origin}</strong> {status.origin}
              </div>
              <div className="status-item">
                <strong>{t.track.destination}</strong> {status.destination}
              </div>
              <div className="status-item">
                <strong>{t.track.estDelivery}</strong> {status.estimatedDelivery}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TrackOrder;
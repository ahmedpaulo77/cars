import React, { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useLanguage } from "../context/LanguageContext";
import "./TrackOrder.css";

function TrackOrder() {
  const { t } = useLanguage();
  const [trackingNumber, setTrackingNumber] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleTrack = async (e) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    setLoading(true);
    setStatus(null);
    setNotFound(false);

    try {
      // بنروح لـ Firestore وندور جوه collection اسمه "shipments"
      // على document الـ ID بتاعه هو رقم الشحنة اللي العميل كتبه
      const docRef = doc(db, "shipments", trackingNumber.trim());
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setStatus({
          id: trackingNumber,
          state: data.state,
          origin: data.origin,
          destination: data.destination,
          estimatedDelivery: data.estimatedDelivery,
        });
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.error("خطأ في جلب بيانات الشحنة:", error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
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
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "جاري البحث..." : t.track.btn}
          </button>
        </form>

        {notFound && (
          <div className="status-result not-found">
            <p>⚠️ لا يوجد شحنة بهذا الرقم. تأكد من الرقم وحاول مرة أخرى.</p>
          </div>
        )}

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
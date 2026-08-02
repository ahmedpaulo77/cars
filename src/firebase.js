// إعدادات الاتصال بمشروع Firebase الخاص بموقع AutoLine
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnsWdLRH8PW9bGNYyUC41dPfKodTLNpvs",
  authDomain: "auto-parts-tracking.firebaseapp.com",
  projectId: "auto-parts-tracking",
  storageBucket: "auto-parts-tracking.firebasestorage.app",
  messagingSenderId: "822584249333",
  appId: "1:822584249333:web:e12b0faaedd5eba837eebc",
};

// تشغيل الاتصال بـ Firebase
const app = initializeApp(firebaseConfig);

// تصدير قاعدة بيانات Firestore عشان نستخدمها في أي صفحة (زي TrackOrder)
export const db = getFirestore(app);
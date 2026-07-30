import { HashRouter, Routes, Route } from "react-router-dom";

// 1. استيراد الـ LanguageProvider لدعم العربي والإنجليزي
import { LanguageProvider } from "./context/LanguageContext";

// 2. استيراد المكونات والصفحات
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import TrackOrder from "./pages/TrackOrder";
import RequestQuote from "./pages/RequestQuote";
import Contact from "./pages/Contact";

import "./styles/global.css";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/request-quote" element={<RequestQuote />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useLanguage } from "../context/LanguageContext";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { t } = useLanguage();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container page-body not-found">
        <h2>{t.productDetails.notFound}</h2>
        <Link to="/products" className="btn-primary">
          {t.productDetails.backBtn}
        </Link>
      </div>
    );
  }

  return (
    <div className="product-details-page">
      <div className="container page-body">
        <div className="details-grid">
          <div className="details-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="details-info">
            <span className="badge">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="price">{product.price}</p>
            <p className="description">{product.description}</p>

            <div className="specs-list">
              <div className="spec-item">
                <strong>{t.productDetails.brand}</strong> {product.brand}
              </div>
              <div className="spec-item">
                <strong>{t.productDetails.compatibleModels}</strong>{" "}
                {product.models ? product.models.join("، ") : t.productDetails.allModels}
              </div>
            </div>

            <div className="action-buttons">
              <Link to="/request-quote" className="btn-primary">
                {t.productDetails.quoteBtn}
              </Link>
              <Link to="/contact" className="btn-secondary">
                {t.productDetails.contactBtn}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

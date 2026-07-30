import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { t } = useLanguage();

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <span className="category-badge">{product.category}</span>
        {product.inStock ? (
          <span className="stock-badge available">{t.productCard.inStock}</span>
        ) : (
          <span className="stock-badge unavailable">{t.productCard.importOrder}</span>
        )}
      </div>

      <div className="product-details">
        <div className="brand-info">
          <strong>{product.brand}</strong> | <span>{t.productCard.origin} {product.origin}</span>
        </div>
        <h3 className="product-title">{product.name}</h3>
        <p className="oem-num">{t.productCard.oem} {product.oemNumber}</p>

        <div className="product-footer">
          <div className="price-tag">{product.price}</div>
          <Link to={`/products/${product.id}`} className="btn-secondary btn-sm">
            {t.productCard.details}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

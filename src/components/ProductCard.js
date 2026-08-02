import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { t, lang } = useLanguage();

  const categoryLabel = lang === "ar" ? product.category : product.categoryEn;
  const originLabel = lang === "ar" ? product.origin : product.originEn;
  const nameLabel = lang === "ar" ? product.name : product.nameEn;
  const priceLabel =
    lang === "ar"
      ? `${product.priceValue} جنيه`
      : `EGP ${product.priceValue}`;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={nameLabel} />
        <span className="category-badge">{categoryLabel}</span>
        {product.inStock ? (
          <span className="stock-badge available">{t.productCard.inStock}</span>
        ) : (
          <span className="stock-badge unavailable">{t.productCard.importOrder}</span>
        )}
      </div>

      <div className="product-details">
        <div className="brand-info">
          <strong>{product.brand}</strong> | <span>{t.productCard.origin} {originLabel}</span>
        </div>
        <h3 className="product-title">{nameLabel}</h3>
        <p className="oem-num">{t.productCard.oem} {product.oemNumber}</p>

        <div className="product-footer">
          <div className="price-tag">{priceLabel}</div>
          <Link to={`/products/${product.id}`} className="btn-secondary btn-sm">
            {t.productCard.details}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <span className="category-badge">{product.category}</span>
        {product.inStock ? (
          <span className="stock-badge available">متوفر بالمخزن</span>
        ) : (
          <span className="stock-badge unavailable">طلب استيراد</span>
        )}
      </div>

      <div className="product-details">
        <div className="brand-info">
          <strong>{product.brand}</strong> | <span>بلد المنشأ: {product.origin}</span>
        </div>
        <h3 className="product-title">{product.name}</h3>
        <p className="oem-num">رقم القطعة (OEM): {product.oemNumber}</p>
        
        <div className="product-footer">
          <div className="price-tag">{product.price}</div>
          <Link to={`/products/${product.id}`} className="btn-secondary btn-sm">
            التفاصيل
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
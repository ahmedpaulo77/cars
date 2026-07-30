import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container page-body not-found">
        <h2>المنتج غير موجود!</h2>
        <Link to="/products" className="btn-primary">
          العودة للكتالوج
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
                <strong>الماركة:</strong> {product.brand}
              </div>
              <div className="spec-item">
                <strong>الموديلات المتوافقة:</strong>{" "}
                {product.models ? product.models.join("، ") : "جميع الموديلات"}
              </div>
            </div>

            <div className="action-buttons">
              <Link to="/request-quote" className="btn-primary">
                طلب تسعير للشحنات
              </Link>
              <Link to="/contact" className="btn-secondary">
                تواصل مع المبيعات
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import products, { CATEGORIES, BRANDS } from "../data/products";
import "./Products.css";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [selectedBrand, setSelectedBrand] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "الكل" || product.category === selectedCategory;
    const matchesBrand =
      selectedBrand === "الكل" || product.brand === selectedBrand;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesBrand && matchesSearch;
  });

  return (
    <div className="products-page">
      <div className="page-header">
        <div className="container">
          <h1>كتالوج قطع الغيار</h1>
          <p>تصفح مخزوننا المتاح واستكشف القطع المتوفرة للاستيراد الفوري</p>
        </div>
      </div>

      <div className="container page-body">
        <div className="filters-bar">
          <input
            type="text"
            placeholder="بحث باسم القطعة أو الماركة..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />

          <div className="select-group">
            <label>القسم:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {CATEGORIES.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="select-group">
            <label>الماركة:</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              {BRANDS.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>لا توجد نتائج تطابق بحثك</h3>
            <p>جرب تغيير الفلاتر أو البحث عن قطعة أخرى.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
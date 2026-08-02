import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { useLanguage } from "../context/LanguageContext";
import "./Products.css";

const CATEGORIES_AR = ["الكل", "فرامل", "فلاتر", "كهرباء", "محرك", "تعليق"];
const CATEGORIES_EN = ["All", "Brakes", "Filters", "Electrical", "Engine", "Suspension"];

 

const BRANDS    = ["All", "Toyota", "Hyundai", "Chevrolet", "Nissan", "Kia"];
const BRANDS_AR = ["الكل", "Toyota", "Hyundai", "Chevrolet", "Nissan", "Kia"];

function Products() {
  const { t, lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(0); // index
  const [selectedBrand, setSelectedBrand]       = useState(0); // index
  const [searchQuery, setSearchQuery]           = useState("");
  const [inStockOnly, setInStockOnly]           = useState(false);

  const categories = lang === "ar" ? CATEGORIES_AR : CATEGORIES_EN;
  const brands     = lang === "ar" ? BRANDS_AR      : BRANDS;

  const filteredProducts = products.filter((product) => {
    // Category match — data is in Arabic
    let catAR = CATEGORIES_AR[selectedCategory];
    const matchesCategory =
      selectedCategory === 0 || product.category === catAR;

    // Brand match — brand names are same in both languages
    const brandKey = BRANDS[selectedBrand]; // always English key
    const matchesBrand =
      selectedBrand === 0 || product.brand === brandKey;

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.oemNumber.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStock = !inStockOnly || product.inStock;

    return matchesCategory && matchesBrand && matchesSearch && matchesStock;
  });

  const handleReset = () => {
    setSelectedCategory(0);
    setSelectedBrand(0);
    setSearchQuery("");
    setInStockOnly(false);
  };

  return (
    <div className="products-page">
      <div className="page-header">
        <div className="container">
          <h1>{t.productsPage.title}</h1>
          <p>{t.productsPage.subtitle}</p>
        </div>
      </div>

      <div className="container page-body products-layout">

        {/* ── Sidebar ── */}
        <aside className="filters-sidebar">
          <h3>{t.productsPage.filterTitle}</h3>

          {/* Category chips */}
          <div className="filter-group">
            <label>{t.productsPage.category}</label>
            <div className="category-chips">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className={`chip ${selectedCategory === i ? "chip--active" : ""}`}
                  onClick={() => setSelectedCategory(i)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <hr className="filter-divider" />

          {/* Brand chips */}
          <div className="filter-group">
            <label>{t.productsPage.brand}</label>
            <div className="brand-chips">
              {brands.map((brand, i) => (
                <button
                  key={i}
                  className={`chip ${selectedBrand === i ? "chip--active" : ""}`}
                  onClick={() => setSelectedBrand(i)}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          <hr className="filter-divider" />

          {/* In-stock checkbox */}
          <div className="filter-group checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
              />
              {t.productsPage.inStockOnly}
            </label>
          </div>

          {/* Reset */}
          <button className="filter-reset-btn" onClick={handleReset}>
            {lang === "ar" ? "↺  مسح الفلاتر" : "↺  Reset Filters"}
          </button>
        </aside>

        {/* ── Products Area ── */}
        <main className="products-content">
          <div className="search-bar-container">
            <input
              type="text"
              placeholder={t.productsPage.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="main-search-input"
            />
          </div>

          <p className="results-count">
            {lang === "ar"
              ? <><span>{filteredProducts.length}</span> نتيجة</>
              : <><span>{filteredProducts.length}</span> result{filteredProducts.length !== 1 ? "s" : ""}</>
            }
          </p>

          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>{t.productsPage.noResults}</h3>
              <p>{t.productsPage.noResultsDesc}</p>
            </div>
          )}
        </main>

      </div>
    </div>
  );
}

export default Products;

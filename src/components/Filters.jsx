import React from 'react';

export default function Filters({ 
  categories, 
  vendors, 
  activeCategory, 
  setActiveCategory, 
  activeVendor, 
  setActiveVendor 
}) {
  return (
    <div className="filters-section">
      {/* Категорії */}
      <div className="filter-group">
        <h3>Категорії</h3>
        <div className="filter-bar">
          <button 
            className={!activeCategory ? "active" : ""} 
            onClick={() => setActiveCategory(null)}
          >Всі</button>
          {categories.map(cat => (
            <button 
              key={cat["@_id"] || cat.id}
              className={activeCategory === (cat["@_id"] || cat.id) ? "active" : ""}
              onClick={() => setActiveCategory(cat["@_id"] || cat.id)}
            >
              {cat["#text"] || cat}
            </button>
          ))}
        </div>
      </div>

      {/* Бренди (Випадаючий список) */}
      <div className="filter-group">
        <h3>Бренд</h3>
        <div className="custom-select-wrapper">
          <select 
            className="brand-select"
            value={activeVendor || ""} 
            onChange={(e) => setActiveVendor(e.target.value || null)}
          >
            <option value="">Всі бренди</option>
            {vendors.map(v => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
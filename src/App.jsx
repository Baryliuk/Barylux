import { useState, useEffect } from "react";
import { XMLParser } from "fast-xml-parser";
import ProductCard from "./components/ProductCard";
import Filters from "./components/Filters";
import OrderModal from "./components/OrderModal"; // Ми створимо його наступним
import "./App.css";

const YML_URL = "https://backend.mydrop.com.ua/vendor/api/export/products/prom/yml?public_api_key=a67945d78b97afdf1cae4e0a47d89ca5ed2b54f1&price_field=drop_price&param_name=Размер&stock_sync=true";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeVendor, setActiveVendor] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
  fetch(YML_URL)
    .then(res => res.text())
    .then(xmlData => {
      const parser = new XMLParser({ 
        ignoreAttributes: false, 
        attributeNamePrefix: "" // Прибираємо префікс @_ для спрощення
      });
      const jsonObj = parser.parse(xmlData);
      
      const offers = jsonObj.yml_catalog.shop.offers.offer;
      const productsArray = Array.isArray(offers) ? offers : [offers];
      setProducts(productsArray);

      // --- ЛОГІКА ЗБОРУ БРЕНДІВ ---
      const uniqueVendors = [...new Set(productsArray.map(p => {
        // 1. Шукаємо в прямому тегу <vendor>
        if (p.vendor) return p.vendor;

        // 2. Шукаємо в параметрах <param name="Бренд">
        if (p.param) {
          const params = Array.isArray(p.param) ? p.param : [p.param];
          // Шукаємо параметр, де ім'я "Бренд" або "Производитель"
          const brandParam = params.find(pr => 
            pr.name === "Бренд" || pr.name === "Производитель" || pr.name === "vendor"
          );
          return brandParam ? (brandParam["#text"] || brandParam) : null;
        }

        return null;
      }).filter(Boolean))];

      console.log("Знайдені бренди:", uniqueVendors); // Подивіться в консоль (F12)
      setVendors(uniqueVendors.sort());
      
      // Також завантажуємо категорії
      const cats = jsonObj.yml_catalog.shop.categories.category;
      setCategories(Array.isArray(cats) ? cats : [cats]);
    });
}, []);

  const filteredProducts = products.filter(p => {
    const matchCat = activeCategory ? String(p.categoryId) === String(activeCategory) : true;
    const matchVendor = activeVendor ? p.vendor === activeVendor : true;
    return matchCat && matchVendor;
  });

  return (
    <div className="app">
      <header>
        <h1>Barylux</h1>
        <Filters 
          categories={categories}
          vendors={vendors}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeVendor={activeVendor}
          setActiveVendor={setActiveVendor}
        />
      </header>

      <main className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product["@_id"] || product.id} 
            product={product} 
            onBuy={setSelectedProduct} 
          />
        ))}
      </main>

      {selectedProduct && (
        <OrderModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}

export default App;
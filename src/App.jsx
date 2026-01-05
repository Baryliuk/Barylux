import { useState, useEffect } from "react";
import { XMLParser } from "fast-xml-parser";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ProductGrid from "./components/ProductGrid";
import "./App.css";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((res) => res.text())
      .then((xmlData) => {
        const parser = new XMLParser({ ignoreAttributes: false });
        const result = parser.parse(xmlData);
        const offers = result.yml_catalog.shop.offers.offer;

        const rawProducts = Array.isArray(offers) ? offers : [offers];

        const uniqueProducts = rawProducts.filter((product, index, self) =>
          index === self.findIndex((p) => p.name === product.name)
        );

        setProducts(uniqueProducts);
      });
  }, [])

  return (
    <BrowserRouter>
      <div className="wrapper">
        <ScrollTop />
        <Header />
        <Routes>
          <Route path="/About" element={<AboutUs/>}></Route>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Product" element={<ProductGrid products={products} />}></Route>
        </Routes>
        <Footer />
      </div >

    </BrowserRouter>
  )
}

export default App;
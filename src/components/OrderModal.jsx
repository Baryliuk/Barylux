import React, { useState, useEffect } from 'react';

export default function OrderModal({ product, onClose }) {
  const [cities, setCities] = useState([]);
  const [searchCity, setSearchCity] = useState("");
  const [selectedCityRef, setSelectedCityRef] = useState("");

  // Пошук міст при введенні
  useEffect(() => {
    if (searchCity.length > 2) {
      fetch("http://localhost:3000/api/get-cities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ search: searchCity })
      })
      .then(res => res.json())
      .then(data => setCities(data));
    }
  }, [searchCity]);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Оформлення замовлення</h2>
        <p>Товар: <strong>{product.name}</strong></p>
        
        <form className="order-form">
          <input type="text" placeholder="Ваше ПІБ" required />
          <input type="tel" placeholder="Телефон" required />
          
          {/* Поле вибору міста */}
          <div className="autocomplete">
            <input 
              type="text" 
              placeholder="Введіть місто (напр. Київ)" 
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
            />
            {cities.length > 0 && (
              <ul className="suggestions">
                {cities.map(city => (
                  <li key={city.Ref} onClick={() => {
                    setSearchCity(city.Description);
                    setSelectedCityRef(city.Ref);
                    setCities([]);
                  }}>
                    {city.Description}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button type="submit" className="confirm-btn">Замовити</button>
          <button type="button" onClick={onClose} className="cancel-btn">Скасувати</button>
        </form>
      </div>
    </div>
  );
}
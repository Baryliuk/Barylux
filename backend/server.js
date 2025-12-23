const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const MYDROP_API_KEY = "a4d59d4845eeb1e7172adc2992485d7c375d1ede"; // Ваш ключ тут у безпеці

app.post('/api/make-order', async (req, res) => {
  try {
    // Формуємо об'єкт замовлення за правилами MyDrop API
    const myDropOrder = {
      name: req.body.name,
      phone: req.body.phone,
      city: req.body.city,
      warehouseNumber: req.body.warehouse,
      products: [
        {
          id: req.body.productId,
          price: req.body.price,
          quantity: 1
        }
      ]
    };

    app.post('/api/get-cities', async (req, res) => {
  try {
    const response = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
      apiKey: "ВАШ_API_КЛЮЧ_НОВОЇ_ПОШТИ", // Отримайте його в кабінеті НП
      modelName: "Address",
      calledMethod: "getCities",
      methodProperties: {
        FindByString: req.body.search,
        Limit: "10"
      }
    });
    res.json(response.data.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

    const response = await axios.post(
      'https://backend.mydrop.com.ua/dropshipper/api/orders', 
      myDropOrder,
      { headers: { 'X-API-KEY': MYDROP_API_KEY } }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Не вдалося створити замовлення" });
  }
});

app.listen(3000, () => console.log('Сервер працює на http://localhost:3000'));
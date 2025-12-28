const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const YML_URL = "https://backend.mydrop.com.ua/vendor/api/export/products/prom/yml?public_api_key=a67945d78b97afdf1cae4e0a47d89ca5ed2b54f1&price_field=drop_price&param_name=Размер&stock_sync=true";

app.get('/api/products', async (req, res) => {
    try {
        console.log("Запит до MyDrop розпочато...");
        const response = await axios.get(YML_URL);
        console.log("Дані від MyDrop отримано!");
        res.send(response.data);
    } catch (error) {
        console.error("ПОМИЛКА BACKEND:", error.message);
        res.status(500).json({ error: "Не вдалося отримати товари", details: error.message });
    }
});

app.listen(3000, () => console.log('Сервер готовий'));
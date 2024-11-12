const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Foydalanuvchi interfeysi uchun fayllarni o'qish
app.use(express.static('public'));

// Ob-havo ma'lumotlarini olish uchun endpoint
app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.json({ error: 'Shahar topilmadi!' });
    }
});

app.listen(PORT, () => {
    console.log(`Server ${PORT} portda ishlamoqda`);
});

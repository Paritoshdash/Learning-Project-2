const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));  // Serve frontend files

app.post('/predict', (req, res) => {
    const { age, bmi, heartRate } = req.body;
    let prediction = "Healthy";

    if (bmi > 30) {
        prediction = "High risk of obesity-related issues";
    } else if (heartRate > 100 || heartRate < 60) {
        prediction = "Abnormal heart rate detected";
    } else if (age > 60) {
        prediction = "Age-related health risks present";
    }

    res.json({ prediction });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const newLocal = './models';
const db = require(newLocal); // Import models

const app = express();
const PORT = process.env.PORT || 3105;

app.use(bodyParser.json());

// Khởi tạo database
db.sequelize.sync()
    .then(() => {
        console.log("Database synced");
    })
    .catch(err => {
        console.error("Unable to sync database:", err);
    });

// Import các route
require('./routes')(app);

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

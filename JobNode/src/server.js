// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/sequelize');
const webRoutes = require('./routes/index');
require('dotenv').config();

const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000; // Sử dụng PORT từ biến môi trường

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
// Middleware
app.use(bodyParser.json());
app.use(express.json()); // Duy trì express.json() để xử lý JSON nếu cần

// Áp dụng router
app.use(webRoutes);

// Khởi tạo database và khởi động server
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate(); // Kiểm tra kết nối
    console.log(`Kết nối thành công đến cơ sở dữ liệu`);
    
    await sequelize.sync(); // Đồng bộ hóa cơ sở dữ liệu
    console.log("Database synced");
    
    console.log(`Server đang chạy trên http://${process.env.HOST_NAME}:${PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

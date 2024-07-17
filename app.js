const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
const receiptRoutes = require('./paths/receiptRoute.js');
app.use('/receipts', receiptRoutes);

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});

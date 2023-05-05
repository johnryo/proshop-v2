import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './config/db.js';
import products from './data/products.js';

connectDB(); // Connect to MongoDB

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.status(200).send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.status(200).json(product);
});

app.listen(port, () => console.log(`Server running on port ${port}...`));

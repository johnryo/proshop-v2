import express from 'express';
import products from './data/products.js';
const app = express();

const port = 5000;

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

import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './config/db.js';
import productRouter from './routes/productRoutes.js';
const port = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('API is running...');
});

app.use('/api/products', productRouter);

app.listen(port, () => console.log(`Server running on port ${port}...`));

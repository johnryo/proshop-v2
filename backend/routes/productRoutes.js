import express from 'express';
const router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/Product.js';

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  })
);

export default router;

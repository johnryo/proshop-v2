import Order from '../models/Order.js';
import asyncHandler from '../middleware/asyncHandler.js';

// POST /api/orders - Create new order - Private
const addOrderItems = asyncHandler(async (req, res) => {
  res.status(201).send('add order items');
});

// GET /api/orders/mine - Get logged-in user orders - Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.status(200).send('get my orders');
});

// GET /api/orders/:id - Get order by ID - Private/Admin
const getOrderById = asyncHandler(async (req, res) => {
  res.status(200).send('get order by id');
});

// PUT /api/orders/:id/pay - Update order to paid - Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.status(200).send('update order to paid');
});

// PUT /api/orders/:id/deliver - Update order to delivered - Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.status(200).send('update order to delivered');
});

// GET /api/orders - Get all orders - Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  res.status(200).send('get all orders');
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};

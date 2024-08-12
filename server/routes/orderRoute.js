// import express from 'express';
// import { createOrder, deleteOrder, getOrderByUser, getOrderById, getOrders, updateOrderToDelivered, updateOrderToPaid } from '../controllers/orderController.js';

// const orderRouter = express.Router();


// orderRouter.get('/orders', getOrders,);

// orderRouter.get('/orders/:id', getOrderById);

// orderRouter.get('/orders/user/:userId', getOrderByUser);

// orderRouter.post('/orders', createOrder);

// orderRouter.put('/orders/:id/pay', updateOrderToPaid);

// orderRouter.put('/orders/:id/deliver', updateOrderToDelivered);

// orderRouter.delete('/orders/:id', deleteOrder);

// export default orderRouter;

import { Router } from 'express'
import { createOrder, getOrderById, getOrderByUserId, updateOrderStatus, getAllOrders } from '../controllers/orderController.js'
const orderRouter = Router()


orderRouter.post('/order', createOrder)

orderRouter.get('/orders', getAllOrders)

orderRouter.get('/orders/:orderId', getOrderById)

orderRouter.get('/order/user/:userId', getOrderByUserId)

orderRouter.put('/order/id/:orderId', updateOrderStatus)

export default orderRouter


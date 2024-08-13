

import { Router } from 'express'
import { createOrder, getOrderById, getOrderByUserId, updateOrderStatus, getAllOrders } from '../controllers/orderController.js'
const orderRouter = Router()


orderRouter.post('/order', createOrder)

orderRouter.get('/orders', getAllOrders)

orderRouter.get('/orders/:orderId', getOrderById)

orderRouter.get('/order/user/:userId', getOrderByUserId)

orderRouter.put('/order/id/:orderId', updateOrderStatus)

export default orderRouter


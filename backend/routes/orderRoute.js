import express from 'express'
import auth from '../middleware/auth.js'
import { listOrders, placeOrder, updateStatus, userOrder, verifyOrder } from '../controllers/orderControllers.js';
import authMiddlerWare from '../middleware/auth.js';

const orderRoute = express.Router();

orderRoute.post("/place",authMiddlerWare,placeOrder)
orderRoute.post("/verify",authMiddlerWare,verifyOrder)
orderRoute.post("/userorders",authMiddlerWare,userOrder)
orderRoute.get("/list",listOrders)
orderRoute.post("/status",updateStatus)

export default orderRoute;
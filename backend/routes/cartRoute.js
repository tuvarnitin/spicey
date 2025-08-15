import express from 'express'
import { addToCart,removeFromCart,getCart } from "../controllers/cartController.js";
import authMiddlerWare from '../middleware/auth.js';

const cartRoute = express.Router();

cartRoute.post("/add",authMiddlerWare,addToCart)
cartRoute.post("/remove",authMiddlerWare,removeFromCart)
cartRoute.post("/get",authMiddlerWare,getCart)

export default cartRoute;
const express=require("express")
const {orderModel}=require("../model/order.model")

const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const orderRouter=express.Router();


orderRouter.post('/order/order', async (req, res) => {
   
    try {
      const { userId, books, totalAmount } = req.body;
  
      const newOrder = new Order({
        user: userId, // Assuming you have the user's ID from JWT
        books,
        totalAmount,
      });
  
      await newOrder.save();
      res.status(201).json({ message: 'Order placed successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
 
orderRouter.get('/order/orders', async (req, res) => {
    try {
      const orders = await orderModel.find().populate('user').populate('books');
      res.status(200).json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
module.exports={
    orderRouter

}
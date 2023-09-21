const express=require("express")
const {bookModel}=require("../model/book.model")

const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const bookRouter=express.Router();


// List all available books
bookRouter.get('/book/books', async (req, res) => {
    try {
      const books = await bookModel.find();
      res.status(200).json(books);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  
  bookRouter.get('/book/books/:id', async (req, res) => {
    try {
      const book = await bookModel.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.status(200).json(book);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  // Add a new book (Protected Route)
bookRouter.post('/api/books', async (req, res) => {
    
    try {
      const { title, author, category, price, quantity } = req.body;
  
      const newBook = new Book({
        title,
        author,
        category,
        price,
        quantity,
      });
  
      await newBook.save();
      res.status(201).json({ message: 'Book added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
 
bookRouter.put('/book/books/:id', async (req, res) => {
    
    try {
      const { title, author, category, price, quantity } = req.body;
  
      const updatedBook = await bookModel.findByIdAndUpdate(
        req.params.id,
        {
          title,
          author,
          category,
          price,
          quantity,
        },
        { new: true }
      );
  
      if (!updatedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  
  bookRouter.delete('/book/books/:id', async (req, res) => {
    
    try {
      const deletedBook = await bookModel.findByIdAndDelete(req.params.id);
  
      if (!deletedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      res.status(202).json({ message: 'Book deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  


module.exports={
    bookRouter

}
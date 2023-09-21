const mongoose=require("mongoose")
require("dotenv").config()

const connection=mongoose.connect("mongodb+srv://prashant:prashantxyz@cluster0.yck3mc0.mongodb.net/BOOKAPI?retryWrites=true&w=majority")

module.exports={
    connection
}
const mongoose=require("mongoose")

const bookSchema=mongoose.Schema({
    title:{type:String,required:true},
    auther:{type:String,required:true},
    category:{type:String,required:true,unique:true},
    price:{type:Number,required:true,unique:true},
    quantity:{type:Number,required:true,unique:true},
})

const bookModel=mongoose.model("book",bookSchema)

module.exports={
    bookModel
}
// {
//     _id: ObjectId,
//     title: String,
//     author: String,
//     category: String,
//     price: Number,
//     quantity: Number
//   }
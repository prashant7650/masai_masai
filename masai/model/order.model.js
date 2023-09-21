const mongoose=require("mongoose")

const orderSchema=mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    totalAmount: Number,
})

const orderModel=mongoose.model("order",orderSchema)

module.exports={
    orderModel
}
// {
//     _id: ObjectId,
//     user : { type: ObjectId, ref: 'User' },
//     books : [{ type: ObjectId, ref: 'Book' }],
//     totalAmount: Number
// }
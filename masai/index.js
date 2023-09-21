const express=require("express")
const {connection}=require("./db")
const {userRouter}=require("./route/user.route")
const {bookRouter}=require("./route/book.route")
const {orderRouter}=require("./route/order.route")

require("dotenv").config()


const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home page")
})


app.use("/user",userRouter)
app.use("/book",bookRouter)
app.use("/order",orderRouter)

app.listen(4500,async()=>{
try{
    await connection
    console.log("connected to db")
    console.log("server is running on 4500")


}catch(err){
    console.log(err)
}

    
})
const express=require("express")
const {userModel}=require("../model/user.model")

const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const userRouter=express.Router();

userRouter.post('/register', async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
    
      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      
      const hashedPassword = await bcrypt.hash(password, 10);
  
     
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        isAdmin: false,
      });
  
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

userRouter.post("/login", async(req,res)=>{
    const {email,password}=req.body
    try{
        const user =await userModel.find({email})
        console.log(user)
        if(user.length>0){
            bcrypt.compare(password,user[0].password,(err,result)=>{
                if(result){
                    token=jwt.sign({userID:user[0]._id},"masai")
                    res.send({"msg":"Login succes","token":token})

                }else{
                    res.send("wrong credential")
                }
            })
        }
        else{
            res.send("credential not found")
        }
        
        
    } catch(err){
        console.log(err)
        res.send({"msg":"Something went wrong","error":err.message})
    }
})

module.exports={
    userRouter

}
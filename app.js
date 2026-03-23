const express=require('express')
const app=express()
const mongoose=require("mongoose")
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
const userRoutes=require("./routes/userRoutes")
mongoose.connect("mongodb://127.0.0.1:27017/userDB")
.then(()=>console.log("Mongodb connected"))
.catch((err)=>console.log(err))

// app.get('/',(req,res)=>{
//     res.send("Server working")
// })
app.use("/",userRoutes);

app.listen(3000,()=>{
    console.log("Server is running")
})
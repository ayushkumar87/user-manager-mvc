const User=require("../models/User");

//GET users (read the data)
exports.getUsers=async(req,res)=>{
    const {city,rating}=req.query;
    let filter={}
    if(city){
        filter.city={ $regex: city, $options: "i" };
    }
    if(rating){
        filter.rating=Number(rating)
    }
    console.log(filter)
    const users=await User.find(filter);
    res.render("users",{users});
}

//Add user(save the data)
exports.addUser=async(req,res)=>{
    const {name,email,city,rating}=req.body;

    const newUser=new User({
        name,
        email,
        city,
        rating
    })
    await newUser.save()
    res.redirect("/users")
}

//delete the user
exports.deleteUser=async(req,res)=>{
    const id=req.params.id;
    await User.findByIdAndDelete(id);
    res.redirect("/users")
}



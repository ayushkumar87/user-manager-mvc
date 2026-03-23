const express=require("express")
const router=express.Router();

const userController=require("../controllers/userController")

//show users
router.get("/users",userController.getUsers);

//add user
router.post("/add-user",userController.addUser)

//delete user
router.get("/delete-user/:id",userController.deleteUser)

module.exports=router;
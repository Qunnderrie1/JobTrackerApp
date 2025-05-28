import express from 'express'
import { createUser, deleteUser, loginUser, logoutUser } from "../Controller/User.js";
const router = express.Router();


// Create User
// POST Method
router.post("/signup" , createUser)
// Login User
// POST Method
.post("/login" , loginUser)
// Logout User
// POST Method
.post("/logout" , logoutUser)

// Delete User
// DELETE Method
router.delete("/:id" , deleteUser)


export default router

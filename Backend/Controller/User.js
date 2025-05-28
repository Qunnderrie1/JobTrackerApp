import User from '../Model/User.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

// Create User Controller
export const createUser = async (req, res) => {
    const {username , email , password } = req.body
    try {

        const user = await User.findOne({email})

        if(user){
            console.log("User already exist")
        }

        const hashPassword = await bcrypt.hash(password , 10)
        const newUser = await User.create({
            username: username,
            email: email,
            password: hashPassword,
        })
        res.send(newUser)
    } catch (error) {
        console.log(error)
    }
}

export const loginUser = async (req, res) => {

    const {email , password } = req.body
    try {

        // Find user by email
         const user = await User.findOne({email})
         const token = await jwt.sign({userId: user._id} , "123abc" , {
            expiresIn: "1h"
        })
        res.cookie("token" , token , {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
        })

        //  find user and compare user input password to hashpassword
        if(user && await bcrypt.compare(password , user.password)){
             res.json({
            _id: user.id,
            username: user.username,
            email: user.email,
            password: user.password,        
        })
        }else{
            return res.status(401).send("Authentication failed!")
        }

        // Handle errors if occur
    } catch (error) {
        throw new Error("Falied to login user.")      
    }
}


export const deleteUser = async (req, res) => {

    const { id } = req.params
    try {
        const deleteUser = await User.deleteOne({_id: id})
        console.log(deleteUser)
        
    } catch (error) {
        console.log("Failed to delete user")        
    }
    res.send("deleting user")
}


export const logoutUser = (req, res) => {

    res.clearCookie('token' , '', {
        httpOnly: '',
    })

}
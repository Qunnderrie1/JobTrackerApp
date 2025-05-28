import mongoose from "mongoose";
const { Schema , model } = mongoose


const userSchema = new Schema({
    username: {
        type:String, 
        require: true,
    },
    email: {
        type: String, 
        require: true,
        unqiue:true
    },
     password: {
        type:String, 
        require: true,
    },

})

const userModel = model('User', userSchema)

export default userModel;
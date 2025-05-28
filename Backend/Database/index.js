import mongoose from "mongoose";




// Connect to Job Tracker Database
const connectDB = async () => {
    const connect = await mongoose.connect(process.env.DATABASE_KEY)
    if(connect){
        console.log(`Connected to ${connect.connection.host}`)
    }   
}


export default connectDB
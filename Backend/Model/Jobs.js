import mongoose from "mongoose";

const { Schema , model}  = mongoose;


// Jobs Schema
const jobSchema =  new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    jobTitle: {
        type: String,
        require: true,

    },
     companyName: {
        type: String,
        require: true,

    },
     appDate: {
        type: String,
        require: true,

    },
     appStatus: {
        type: String,
        require: true,
        default: "Applied"

    },
    notes:{
        type:String,
    }
})

// Jobs model
const jobModel = model('Jobs' , jobSchema)

export default jobModel
import Jobs from '../Model/Jobs.js'
export const allJobs = async (req, res) => {
    const id = req.user._id
    try {

        const allJobs = await Jobs.find({user: id});
        res.send(allJobs)
        
    } catch (error) {
        res.json({message: "Failed to get user jobs"})
    }
   
}

export const jobById = async (req, res) => {
   
    try {

        const getJobById = await Jobs.findById(req.params.id)
        res.send(getJobById)
        console.log(getJobById)
    } catch (error) {
        res.status(401).json({message: "Failed getting jobs by id"})
    }
   
}

export const createJob = async (req, res) => {
     const { companyName, jobTitle, appDate, appStatus, notes  } = req.body

    try {

        const newJob = await Jobs.create({
            companyName,
            jobTitle,
            appDate,
            appStatus,
            notes,
            user: req.user._id

        })
        res.send(newJob)
    } catch (error) {
        console.log("Failed to add new job")   
    }
   
}

export const deleteJob = async (req, res) => {
     try {
        const deleteJob = await Jobs.deleteOne({_id: req.params.id})
        res.json({msg: "Job has been deleted"}).status(200)
    } catch (error) {
        res.send({message: "Failed to deleted job"})
    }
   
}


export const updateJob = async (req, res) => {
    try {

       const updateJob = await Jobs.updateOne({_id : req.params.id}, req.body)
       res.send(updateJob)
       console.log(updateJob)
        
    } catch (error) {
        console.log("Failed to update job")
    }

    console.log(req.body)

    res.end();
    
}
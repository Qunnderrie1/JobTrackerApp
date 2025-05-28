import mongoose from "mongoose";
import express from 'express'
import Jobs from '../Model/Jobs.js'
import bcrypt from 'bcrypt'
import protect from "../protect.js";
import { allJobs, createJob, deleteJob, jobById, updateJob } from "../Controller/Jobs.js";
const router = express.Router();



// Get All Jobs
// GET Method
router.get("/" , protect , allJobs)

// Get Job by ID
// GET Method
router.get("/:id" , protect , jobById)

// Create new Job
// POST Method
router.post("/", protect , createJob)
 
// Delete Job by ID
// DELETE Method
router.delete("/:id" , protect , deleteJob)

// Update job by ID
// PUT Method
router.put("/:id" , protect, updateJob)



export default router
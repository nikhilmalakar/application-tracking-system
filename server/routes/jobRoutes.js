import express from 'express';
import Job from '../models/Job.js';

const router = express.Router();

import {getJobs} from '../controllers/Job/getJobs.js';
import {getJob } from '../controllers/Job/getJob.js';
import {addJob} from '../controllers/Job/addJob.js';
import { deleteJob } from '../controllers/Job/deleteJob.js';
import { updateJob } from '../controllers/Job/updateJob.js';
import { updateJobByCandidate } from '../controllers/Job/updateJobByCandidate.js';

router.get('/all-jobs', getJobs); 
router.post('/post-job', addJob); 
router.get('/current-job/:id', getJob); 
router.delete('/delete-job/:id', deleteJob); 
router.put('/update-job/:id', updateJob);
router.put('/update-job-by-candidate/', updateJobByCandidate);


export default router;
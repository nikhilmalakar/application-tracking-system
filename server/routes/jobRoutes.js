import express from 'express';
import Job from '../models/Job.js';

const router = express.Router();

import {getJobs} from '../controllers/Job/getJobs.js';
// import {getFlashCard} from '../controllers/flashcard/getFlashCard.js';
import {addJob} from '../controllers/Job/addJob.js';
// import {deleteFlashCard} from '../controllers/flashcard/deleteFlashCard.js';
// import {updateFlashCard} from '../controllers/flashcard/updateFlashCard.js';

router.get('/all-jobs', getJobs); //ok
// router.get("/getFlashCard/:id/:lid", getFlashCard); //ok
router.post('/post-job', addJob); //ok
// router.delete('/deleteFlashCard/:id', deleteFlashCard); //ok
// router.put('/updateFlashCard/:id', updateFlashCard); //ok

export default router;
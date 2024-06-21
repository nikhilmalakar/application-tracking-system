import express from 'express';
import Recruiter from '../models/Recruiter.js';

const router = express.Router();

import {addRecruiter} from '../controllers/Recruiter/addRecruiter.js';
import {allRecruiter} from '../controllers/Recruiter/allRecruiter.js';
import {getRecruiter} from '../controllers/Recruiter/getRecruiter.js';

router.post('/post-recruiter', addRecruiter); 
router.get('/get-recruiter/:id', getRecruiter);
router.get('/all-recruiter', allRecruiter);

export default router;
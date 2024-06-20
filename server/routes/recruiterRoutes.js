import express from 'express';
import Recruiter from '../models/Recruiter.js';

const router = express.Router();

import {addRecruiter} from '../controllers/Recruiter/addRecruiter.js';

router.post('/post-recruiter', addRecruiter); 

export default router;
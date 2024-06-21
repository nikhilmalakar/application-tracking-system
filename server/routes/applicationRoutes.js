import express from 'express';
import Application from '../models/Application.js';

const router = express.Router();

import {addApplication} from '../controllers/Application/addApplication.js';
// import {getApplication} from '../controllers/Application/getApplication.js'
import { getApplications } from '../controllers/Application/getApplications.js';
import { getApplication } from '../controllers/Application/getApplication.js';

router.post('/post-application', addApplication); 
router.get('/get-application/:id', getApplication);
router.get('/all-application/', getApplications);

export default router;
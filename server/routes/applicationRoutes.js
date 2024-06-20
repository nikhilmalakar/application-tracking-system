import express from 'express';
import Application from '../models/Application.js';

const router = express.Router();

import {addApplication} from '../controllers/Application/addApplication.js';

router.post('/post-application', addApplication); 

export default router;
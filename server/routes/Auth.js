import express from 'express';
import { login, logout, register } from '../controllers/Auth/Auth.js';
import { authenticate } from '../middleware/VerifyToken.js';
import User from '../models/User.js';

const router = express.Router();

router.post('/login', login); 
router.post('/logout', logout); 
router.post('/register', register);

router.get('/validuser', authenticate, async (req, res) => {
    try {
        const validuser = await User.findById(req.userId)
        res.status(201).json({status:201, validuser});
    } catch (error) {
        res.status(401).json({status:401, error});
    }
})


export default router;
import jwt from 'jsonwebtoken'
import User from '../models/User.js';
const secret = process.env.JWT_SECRET || "atsjwtkey"

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        
        const decoded = jwt.verify(token, secret);
        
        const user = await User.findById(decoded.userId);
        
        if (!user) {throw new Error("User not found")}
        
        req.token = token
        req.userId = decoded.userId
        req.user = user;

        next();
    } catch (error) {
        return res.status(401).json({status:401,error});
    }



}


export { authenticate}
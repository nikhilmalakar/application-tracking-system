import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    
    userName:{
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["employer", "coordinator", "recruiter", "candidate"],
        default: "candidate"
    },
    isAssigned: {
        type: Boolean
    },
    applications: [{
        jobId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Job',
            required: true
        },
        status: {
            type: String,
            enum: ['active', 'inactive', 'shortlist', 'rejected'],
            default: 'active'
        }
    }]
});

const User = mongoose.model('User', UserSchema);

export default User;
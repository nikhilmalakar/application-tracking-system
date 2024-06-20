import mongoose from 'mongoose';

const RecruiterSchema = new mongoose.Schema({
    jobID: {
        type: String,
        required: true
    },
    recruiterID: {
        type: String,
        required: true
    },
    feedbackForm:{ 
        question: [{ type: String}], 
        answer: [{ type: String}] 
    }
});

const Recruiter = mongoose.model('Recruiter', RecruiterSchema);

export default Recruiter;
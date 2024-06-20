import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
    jobID: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    employmentType: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    applicationForm:{ 
        question: [{ type: String}], 
        answer: [{ type: String}] 
    },
    applicants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

const Job = mongoose.model('Job', JobSchema);

export default Job;
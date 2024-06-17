import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
    // jobID: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true
    // },
    jobTitle:{
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
    q1: {
        type: String
    },
    qa1: {
        type: String
    },
    q2: {
        type: String
    },
    qa2: {
        type: String
    },
    q3: {
        type: String
    },
    qa3: {
        type: String
    },
    q4: {
        type: String
    },
    qa4: {
        type: String
    },
    q5: {
        type: String
    },
    qa5: {
        type: String
    },
});

const Job = mongoose.model('Job', JobSchema);

export default Job;
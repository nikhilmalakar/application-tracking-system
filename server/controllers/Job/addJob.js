import Job from '../../models/Job.js'
import uniqid from 'uniqid';

const addJob = async (req, res) => {
    const { jobTitle, employmentType, location, salary, description, applicationForm, applicants } = req.body;

    console.log("Data on backend");
    console.log(req.body);

    const job = new Job({
        jobID: uniqid(),
        jobTitle,
        employmentType,
        location,
        salary,
        description,
        applicationForm,
        applicants
    });

    try {   
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export {addJob};
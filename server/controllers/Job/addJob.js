import Job from '../../models/Job.js'

const addJob = async (req, res) => {
    const { id } = req.params;
    const { jobTitle, location, salary, description, employmentType, q1, q2, q3, q4, q5, qa1, qa2, qa3, qa4, qa5 } = req.body;

    const job = new Job({
        // jobID : id,
        jobTitle, 
        location, 
        salary, 
        description,
        employmentType,
        q1, q2, q3, q4, q5,
        qa1, qa2, qa3, qa4, qa5
    });

    try {   
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export {addJob};
import Job from '../../models/Job.js'

const updateJob = async (req, res) => {
    try {
        const { jobId } = req.params;
        const { jobTitle, location, salary, description, employmentType, q1, q2, q3, q4, q5, qa1, qa2, qa3, qa4, qa5 } = req.body;

        const job = await Job.findById(jobId);
        console.log(job);
        
        if (job) {
            job.jobTitle = jobTitle || job.jobTitle;
            job.location = location || job.location;
            job.salary = salary || job.salary;
            job.description = description || job.description;
            job.employmentType = employmentType || job.employmentType;
            job.q1 = q1 || job.q1;
            job.q2 = q2 || job.q2;
            job.q3 = q3 || job.q3;
            job.q4 = q4 || job.q4;
            job.q5 = q5 || job.q5;
            job.qa1 = qa1 || job.qa1;
            job.qa2 = qa2 || job.qa2;
            job.qa3 = qa3 || job.qa3;
            job.qa4 = qa4 || job.qa4;
            job.qa5 = qa5 || job.qa5;
        }
        await job.save();

        res.status(200).json({ success: true, data: job });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

export { updateJob };
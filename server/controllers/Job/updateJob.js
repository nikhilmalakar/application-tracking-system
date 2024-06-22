import Job from '../../models/Job.js'

const updateJob = async (req, res) => {
    try {
        const { jobId, jobTitle, employmentType, location, salary, description, applicationForm, applicants } = req.body;

        const updatedJob = await Job.findByIdAndUpdate(jobId, {
            jobTitle,
            employmentType,
            location,
            salary,
            description,
            applicationForm,
            applicants
        }, { new: true });

        res.status(200).json(updatedJob);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

export { updateJob };
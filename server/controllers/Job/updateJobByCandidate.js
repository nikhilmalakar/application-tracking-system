import Job from '../../models/Job.js'

const updateJobByCandidate = async (req, res) => {
    try {
        const { jobID, candidateID, status } = req.body;

        // Find the job by jobId
        const updatedJob = await Job.findByIdAndUpdate(
            jobID,
            { $push: { applicants: { applicant: candidateID, status:status } } },
            { new: true } // To return the updated document
        );

        if (!updatedJob) {
            return res.status(404).json({ error: 'Job not found' });
        }

        res.status(200).json(updatedJob);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update job by candidate' });
    }
}

export { updateJobByCandidate };
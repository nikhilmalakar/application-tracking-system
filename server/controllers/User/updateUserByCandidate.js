import User from '../../models/User.js'

const updateUserByCandidate = async (req, res) => {
    try {
        const { jobID, candidateID, status } = req.body;

        // Find the job by jobId
        console.log("Update user by candidate");
        console.log(req.body);

        const updatedUser = await User.findByIdAndUpdate(
            candidateID,
            { $push: { applications: { jobID:jobID, candidateID:candidateID, status:status } } },
            { new: true } // To return the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({ error: 'Job not found' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update job by candidate' });
    }
}

export { updateUserByCandidate };
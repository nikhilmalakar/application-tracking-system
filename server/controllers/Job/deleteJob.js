import Job from '../../models/Job.js'

const deleteJob = async (req, res) => {
    try {
        const jobId = req.params.id;
        await Job.findByIdAndDelete(jobId);
        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete job' });
    }
};

export {deleteJob};
import Job from '../../models/Job.js'

const getJobs = async (req, res) => {
    try {
        const job = await Job.find();
        res.status(200).json(job);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export {getJobs};
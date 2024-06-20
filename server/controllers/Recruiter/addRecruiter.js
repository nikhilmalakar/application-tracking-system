import Recruiter from '../../models/Recruiter.js'

const addRecruiter = async (req, res) => {
    try {
        const {jobID, recruiterID, recruiterForm } = req.body;
        
        const newRecruiter = new Recruiter({
            jobID,
            recruiterID,
            recruiterForm
        });

        await newRecruiter.save();

        res.status(201).json(newRecruiter);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {addRecruiter};
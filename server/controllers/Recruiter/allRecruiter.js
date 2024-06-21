import Recruiter from '../../models/Recruiter.js'

const allRecruiter = async (req, res) => {
    try {
        const recID = req.params.id;
        const recruiter = await Recruiter.find();
        res.status(200).json(recruiter);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export {allRecruiter};
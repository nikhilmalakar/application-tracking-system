import Recruiter from '../../models/Recruiter.js'

const getRecruiter = async (req, res) => {
    try {
        const recID = req.params.id;
        const recruiter = await Recruiter.findById("6673362cab92f179a717d0e3");
        if (!recruiter) {
            return res.status(404).json({ message: 'Recruiter not found' });
        }
        res.status(200).json(recruiter);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export {getRecruiter};
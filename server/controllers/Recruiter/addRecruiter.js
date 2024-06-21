import Recruiter from '../../models/Recruiter.js'

const addRecruiter = async (req, res) => {
    try {
        const {jobID, recruiterID, feedbackForm } = req.body;
        
        console.log(req.body);

        const newRecruiter =  new Recruiter({
            jobID,
            recruiterID,
            feedbackForm
        });

        await newRecruiter.save();

        res.status(201).json(newRecruiter);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {addRecruiter};
import Application from '../../models/Application.js'
import uniqid from 'uniqid';

const addApplication = async (req, res) => {
    const { _id, jobID, candidateID, applicationStatus, applicationForm, candidateFeedback } = req.body;

    try {
        const existingApplication = await Application.findById(_id);
        if (!existingApplication) {
            return res.status(404).json({ message: "Application not found" });
        }
        
        if (jobID) {
            existingApplication.jobID = jobID;
        }
        if (candidateID) {
            existingApplication.candidateID = candidateID;
        }
        if (applicationStatus) {
            existingApplication.applicationStatus = applicationStatus;
        }
        if (applicationForm) {
            existingApplication.applicationForm = applicationForm;
        }
        if (candidateFeedback) {
            existingApplication.candidateFeedback = candidateFeedback;
        }

        await existingApplication.save();
        res.status(200).json(existingApplication);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {addApplication};
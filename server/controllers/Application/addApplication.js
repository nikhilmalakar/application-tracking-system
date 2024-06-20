import Application from '../../models/Application.js'
import uniqid from 'uniqid';

const addApplication = async (req, res) => {
    const { jobID, candidateID, applicationForm } = req.body;

    console.log("Data on backend");
    console.log(req.body);

    const application = new Application({
        jobID,
        candidateID,
        applicationForm
    });

    try {   
        await application.save();
        res.status(201).json(application);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export {addApplication};
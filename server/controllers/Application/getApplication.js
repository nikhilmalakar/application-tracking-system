import Application from '../../models/Application.js'

const getApplication = async (req, res) => {
    try {
        const applicationID = req.params.id;
        const application = await Application.findById(applicationID);
        
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.status(200).json(application);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export {getApplication};
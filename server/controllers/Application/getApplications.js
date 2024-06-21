import Application from '../../models/Application.js'

const getApplications = async (req, res) => {
    try {

        const application = await Application.find();
        res.status(200).json(application);
        
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export {getApplications};
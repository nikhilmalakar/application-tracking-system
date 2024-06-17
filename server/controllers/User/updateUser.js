import User from '../../models/User.js'

const updateUser = async (req, res) => {
    try {
        const { userName, userEmail, userPassword, gender, address, userType } = req.body;

        const filteredData = {
            ...(userName && { userName }),
            ...(userEmail && { userEmail }),
            ...(userPassword && { userPassword }),
            ...(gender && { gender }),
            ...(address && { address }),
            ...(userType && { userType })
        };
        
        const updatedUser = await User.findByIdAndUpdate(req.params.id, filteredData, { new: true });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {updateUser};
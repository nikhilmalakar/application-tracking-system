import User from '../../models/User.js'

const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Failed to get user" });
    }
};

export {getUser};
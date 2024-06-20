import User from '../../models/User.js'

const updateUser = async (req, res) => {
    try {
        const {id} = req.params;

        const user = await User.findById(id);
        
        if(!user) {
            return res.status(404).json({ 
                success:false,
                message: "User not found" 
            });
        }
        
        // user.userName = userName;
        // user.userEmail = userEmail;
        // user.userPassword = userPassword;
        // user.gender = gender;
        // user.address = address;
        user.isAssigned = req.body.isAssigned;
        // user.userType = userType;
        
        await user.save();
        res.status(200).json({success: true, data: user});
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {updateUser};
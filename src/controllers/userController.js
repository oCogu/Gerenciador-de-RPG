import userService from "../services/userService.js"

const userController = {
    getProfile: async (req, res) => {
        try {
            const user = await userService.profile.getData(req.user);
            res.json(user);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

export default userController

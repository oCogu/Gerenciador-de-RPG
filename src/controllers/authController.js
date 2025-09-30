import authService from "../services/authService.js"

const auth = {

    register: async (req, res) =>{
        try {
            const token = await authService.register(req.body)
            res.cookie("authToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 1000 * 60 * 60 * 24 // 1 dia
        });
            
            res.status(201).json({message: "usuario cadastrado" });
        } catch (error) {
            res.status(401).json({error: error.message})
        }
    },

    login: async (req, res) => {

        try {
            const token = await authService.login(req.body)
            res.cookie("authToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 1000 * 60 * 60 * 24 // 1 dia
        });
            res.status(202).json({message: "login realizado com sucesso"})
        } catch (error) {
            res.status(402).json({error: error.message})
        }
    },

    logout: async (req, res) => {
        res.clearCookie("authToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        });
        res.json({ message: "Logout realizado" });
    }

}
    
export default auth
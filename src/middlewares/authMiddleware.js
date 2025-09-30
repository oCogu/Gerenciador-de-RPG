import User from "../models/user.model.js";
import jwt from "../utils/jwt.js"


const authMiddleware = async (req, res, next) => {
    
    const token = req.cookies.authToken;
    if (!token) return res.status(401).json({ error: "Não autenticado" });

    try {
        const payload = jwt.verifyToken(token);
        const user = await User.findById(payload.user)
        
        if (!user)
            return res.status(401)

        req.user = user._id
        next();

    } catch (err) {
        return res.status(401).json({ error: "Token inválido" });
    }

}

export default authMiddleware
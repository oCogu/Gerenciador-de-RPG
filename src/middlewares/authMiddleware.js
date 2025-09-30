import jwt from "../utils/jwt.js"

const authMiddleware = (req, res, next) => {
    
    const token = req.cookies.authToken;
    if (!token) return res.status(401).json({ error: "Não autenticado" });

    try {
        const payload = jwt.verifyToken(token);
        req.userId = payload.user;
        next();
    } catch (err) {
        res.status(401).json({ error: "Token inválido" });
    }

}

export default authMiddleware
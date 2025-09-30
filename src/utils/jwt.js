import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const SECRET = process.env.JWT_SECRET

const token = {
    signToken: (payload) =>{
        return jwt.sign(payload, SECRET, {expiresIn: "24h"} )
    },
    verifyToken: (token) => {
        return jwt.verify(token, SECRET)
    },

}

export default token
import { customAlphabet } from "nanoid"
import User from "../models/user.model.js"

const generateId = async () =>{
    const tries = 5
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    const nanoid = customAlphabet(alphabet, 10)

    for(let i = 0; i < tries; i++){
        
        const publicId = nanoid()

         const existingUser = await User.findOne({publicId})

         if (!existingUser)
            return publicId
    }
}

export default generateId
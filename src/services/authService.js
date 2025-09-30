import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import validators from "../utils/validators.js"
import token from "../utils/jwt.js"

const security = 10

const authService = {

    register: async ({nameTag, email, password}) =>{
        
        if (!nameTag||!email||!password)
            throw new Error("Todos os campos são obrigatórios")

        validators.validateEmail(email)
        validators.validatePassword(password)
            
        const existingUser = await User.findOne({email})

        if (existingUser) 
            throw new Error("Usuario já existe")

        const hashedPassword = await bcrypt.hash(password, security)

            const user = new User({
            nameTag,
            email: email.toLowerCase(),
            password: hashedPassword
        })

            await user.save()
            return token.signToken({user: user._id})
            
            
    },

    login: async ({email, password}) => {

        validators.validateEmail(email)

        const user = await User.findOne({email})

        if (!user || !(await bcrypt.compare(password, user.password)))
            throw new Error("Credenciais invalidas!")

        return token.signToken({user: user._id})
    }
    
}

export default authService
import User from '../models/user.model.js'
import validators from '../utils/validators.js';
import bcrypt from "bcrypt"

const userService = {
    profile: {

        setNameTag: async (userId, name) => {
            return User.findByIdAndUpdate(
            userId,
            { nameTag: name },
            { new: true }
            ).select("-password");
        },

        setEmail: async (userId, email) => {
            validators.validateEmail(email)
            return User.findByIdAndUpdate(
                userId,
                {email: email},
                {new: true}
            ).select("-password")
        },

        setPassword: async (userId, oldPassword, newPassword) => {
            const user = await User.findById(userId)

            if (!user)
                throw new Error("Usuario não existe")

            if (!oldPassword)
                throw new Error("Senha antiga obrigatoria")

            if(!(await bcrypt.compare(oldPassword, user.password)))
                throw new Error("Senha não compativel")

            validators.validatePassword(newPassword)

            user.password = await bcrypt.hash(newPassword, 10)
            await user.save()

            const userObj = user.toObject();
            delete userObj.password;
            return userObj;
        },

        getData: async (userId) => {
            const user = await User.findById(userId).select("-password").select("-_id")
            if(!user)
                throw new Error("Usuário não existe")

            return user
        }

    }
}

export default userService
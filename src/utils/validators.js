const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const validators = {

    validatePassword : (password) => {
        if (!passwordRegex.test(password))
            throw new Error("Formato de senha inválido")
    },

    validateEmail : (email) => {
        if (!emailRegex.test(email))
            throw new Error("Email inválido")
    }
}

export default validators
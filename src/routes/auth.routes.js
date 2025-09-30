import express from 'express'
import authControler from "../controllers/authController.js"

const router = express.Router()

router.post('/register', authControler.register)
router.post('/login', authControler.login)
router.post('/logout', authControler.logout)

export default router;

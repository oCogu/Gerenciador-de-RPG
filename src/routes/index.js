import express from 'express'
import authRouter from './auth.routes.js'
import userRoutes from './user.routes.js'

const router = express.Router()

router.use('/', authRouter)
router.use('/', userRoutes)

export default router;
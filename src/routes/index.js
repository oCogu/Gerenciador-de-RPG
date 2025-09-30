import express from 'express'
import authRouter from './auth.routes.js'
import userRoutes from './user.routes.js'
import campaignRoutes from './campaign.routes.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/', authMiddleware, userRoutes)
router.use('/campaign',authMiddleware, campaignRoutes)

export default router;
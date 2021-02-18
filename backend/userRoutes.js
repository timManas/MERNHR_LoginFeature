import express from 'express'
import { authUser, getUserProfile } from './userController.js'
import { protect } from './authMiddleware.js'

const router = express.Router()

// GET list of products in JSON format
router.post('/login', authUser)

// GET User profile
router.route('/profile').get(protect, getUserProfile)

export default router
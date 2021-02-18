import express, { Router } from 'express'
import asyncHandler from 'express-async-handler'
import Product from './productModel.js'
import {getProducts, getProductById} from './productController.js'

const router = express.Router()

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router
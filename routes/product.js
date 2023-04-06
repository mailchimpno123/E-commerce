import express from 'express'
import { isAuthenticated, isAdmin } from '../middlewares/auth.js'
import { singleUpload } from '../middlewares/multer.js'
import {
	addCategory,
	addProductImage,
	createProduct,
	deleteCategory,
	deleteProduct,
	deleteProductImage,
	getAdminProducts,
	getAllCategories,
	getAllProducts,
	getProductDetails,
	queryProduct,
	updateProduct,
} from '../controllers/product.js'

const router = express.Router()

router.get('/all', getAllProducts, queryProduct)
router.get('/admin', isAuthenticated, isAdmin, getAdminProducts)

router
	.route('/single/:id')
	.get(getProductDetails)
	.put(isAuthenticated, isAdmin, updateProduct)
	.delete(isAuthenticated, isAdmin, deleteProduct)

router.post('/new', isAuthenticated, isAdmin, singleUpload, createProduct)

router
	.route('/images/:id')
	.post(isAuthenticated, isAdmin, singleUpload, addProductImage)
	.delete(isAuthenticated, isAdmin, deleteProductImage)

router.get('/categories', getAllCategories)
router.post('/category', isAuthenticated, isAdmin, addCategory)
router.delete('/category/:id', isAuthenticated, isAdmin, deleteCategory)

export default router

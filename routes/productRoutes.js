const express = require('express')
const router = express.Router()
const authenticateUser = require('../middleware/auth')

const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require('../controllers/productController')

const { getSingleProductReviews } = require('../controllers/reviewController')

router.route('/').post(authenticateUser, createProduct).get(getAllProducts)

router.route('/uploadImage').post(authenticateUser, uploadImage)

router
  .route('/:id')
  .get(getSingleProduct)
  .patch(authenticateUser, updateProduct)
  .delete(authenticateUser, deleteProduct)

router.route('/:id/reviews').get(getSingleProductReviews)

module.exports = router

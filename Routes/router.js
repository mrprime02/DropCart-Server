const express = require('express')
const productController = require('../Controllers/productController')
const userController = require('../Controllers/userController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const wishlistController = require('../Controllers/wishlistController')
const cartController = require('../Controllers/cartController')

const router = new express.Router()

// getallproduct
router.get('/all-products',productController.getAllProductController)
// register
router.post('/register',userController.registerController)
// login
router.post('/login',userController.loginController)
// viewProduct
router.get('/view-products/:id',productController.getAProductController)
// addToWishlist
router.post('/add-to-wishlist',jwtMiddleware,wishlistController.addToWishlistController)
// get Wishlist
router.get('/get-wishlist',jwtMiddleware,wishlistController.getWishlistController)
// delete Wishlist
router.delete('/wishlist-remove/:id',jwtMiddleware,wishlistController.removeProductWishlistController)
// addto cart
router.post('/add-to-cart',jwtMiddleware,cartController.addToCartController)
// get cart
router.get('/get-cart',jwtMiddleware,cartController.getCartController)
// remove cart item
router.delete('/remove-cart/:id',jwtMiddleware,cartController.removeCartItemController)
// increment cart item
router.get('/cart-increment/:id',jwtMiddleware,cartController.incrementItems)
// increment cart item
router.get('/cart-decrement/:id',jwtMiddleware,cartController.decrementItems)
// empty cart
router.delete('/empty-cart',jwtMiddleware,cartController.emptyCart)

module.exports = router
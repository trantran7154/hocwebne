const express = require('express');

const {
    uploadImageProduct
} = require('../../common/file_upload');

const productController = require('../app/controllers/ProductController');


const router = express.Router();

router.get('/product', productController.getProduct);

// [GET]
router.get('/product/index', productController.getJsonProduct);
router.get('/product/category/index', productController.getJsonCategory);

// [POST]
router.post('/product/create', uploadImageProduct('file'), productController.createProduct);

module.exports = router;
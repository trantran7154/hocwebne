const express = require('express');

class ProductController {
    getProduct = (req, res) => {
        res.render('product');
    };
}
module.exports = new ProductController();
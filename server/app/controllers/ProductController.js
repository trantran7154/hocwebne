const productModel = require('../models/ProductModel');

class ProductController {
    getProduct = (req, res) => {
        res.render('product');
    };

    // * get
    getJsonProduct = (req, res) =>{
        productModel.find({ bin: false }, function(err, data){
            res.json(data);
        });
    };
    // * function
    createProduct = (req, res) => {
        console.log(req.query);

        const product = new productModel(req.query);
        product.save();
        
        res.json( {
            data: req.query,
            success: true
        });
    };
}
module.exports = new ProductController();
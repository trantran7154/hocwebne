const productModel = require('../models/ProductModel');
const categoryModel = require('../models/CategoryModel');

class ProductController {
    getProduct = (req, res) => {
        res.render('product');
    };

    // * [GET]
    getJsonProduct = (req, res) =>{
        productModel.find({ bin: false }, function(err, data){
            res.json(data);
        });
    };

    getJsonCategory = (req, res) =>{
        categoryModel.find({bin: false, active: true}, function(err, data){
            res.json({
                data: req.query,
                success: true
            });
        });
    };
    // * [POST]
    createProduct = (req, res) => {
        console.log(req.file);

        const product = new productModel(req.query); 
        product.image = req.file.filename;
        product.save();
        
        res.json( {
            data: req.query,
            success: true
        });
    };
}
module.exports = new ProductController();
const multer  = require('multer');
module.exports = {
    uploadImageProduct: function(name){
        const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'client/public/images/products')
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + '-' + file.originalname
            cb(null, file.fieldname + '-' + uniqueSuffix)
        }
        })
        const upload = multer({ 
            storage: storage
        });
        
        return upload.single(name);
    }
};
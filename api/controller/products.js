const Products = require('../../models/products');

module.exports.create = (req, res) => {
    Products.findOne({id: req.body.id}, (err, product) => {
        if(err) {console.log('Error in product controller', err); return;}
        if(!product){
            Products.create(req.body, (err, product) => {
                if(err) {console.log('Error in product controller', err); return;}
            });
        return res.status(200).json({
            message: 'Product created successfully'
        })
        }else{
            res.status(409).status({
                message: 'Cannot create this product as the product already exists.'
            });
        }
    })
}

module.exports.listAllProducts = async (req, res) => {
    let products = await Products.find({});
    return res.status(200).json({
        message: 'All the products in the ecom database',
        products
    })
}

module.exports.delete = (req, res) => {
    let id = req.params.id;
    Products.findOneAndDelete({id: id}, err => {
        if(err) {console.log('Error in deleting the product from the database', err); return;}
        res.status(200).json({
            message: 'Successfully deleted the product'
        });
    })
}

module.exports.update = async (req, res) => {
    console.log(req.query);
    let id = req.params.id;
    let number = req.query.number;
    let update = await Products.findOneAndUpdate({id: id}, {quantity: quantity + number}, {new: true});
    res.status(200).json({
        message: 'Successfully updated the product',
        data: {
            id: update.id,
            name: update.name,
            quantity: update.quantity
        }
    });
}
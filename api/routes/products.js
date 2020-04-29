const express = require('express');
const router = express.Router();

const productsController = require('../controller/products');

router.get('/', productsController.listAllProducts);
router.post('/create', productsController.create);
router.get('/:id', productsController.delete);
router.post('/:id/update_quantity/?number=10', productsController.update);

module.exports = router;
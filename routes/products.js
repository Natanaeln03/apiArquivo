const express = require('express'); 
const router = express.Router(); 
const productsController = require('../controllers/productsController'); 


router.get('/', productsController.getAllProducts);

router.post('/', productsController.addProduct);

router.put('/:id', productsController.updateProductPut);

router.patch('/:id', productsController.updateProductPatch);

router.delete('/:id', productsController.deleteProduct);

module.exports = router;
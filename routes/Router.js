const express = require('express');
const router = express.Router();
const crudControler = require('../controller/crudController');

router.get('/', crudControler.getWelcome);
router.get('/api/products', crudControler.getProduct);
router.get('/api/product/:id', crudControler.getproductById);
router.post('/api/product', crudControler.postProduct);
router.put('/api/product/:id', crudControler.updateProduct);
router.delete('/api/product/:id', crudControler.deleteProduct);

module.exports = router;

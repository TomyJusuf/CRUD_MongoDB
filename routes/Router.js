const express = require('express');
const router = express.Router();
const crudControler = require('../controller/crudController');

router.get('/', crudControler.getProduct);
router.get('/:id', crudControler.getproductById);
router.post('/product', crudControler.postProduct);
router.put('/:id', crudControler.updateProduct);
router.delete('/:id', crudControler.deleteProduct);

module.exports = router;

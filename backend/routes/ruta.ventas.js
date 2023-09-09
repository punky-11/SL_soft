const productos = require('../controller/use-cases/controller.productos');
const express = require('express');
const router =express.Router();

router.post('/agregarProductos', productos.agregarProductos);
router.get('/buscarProductos', productos.buscarProductos);
module.exports=router;
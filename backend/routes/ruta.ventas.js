const productos = require('../controller/use-cases/use.productos');
const express = require('express');
// eslint-disable-next-line new-cap
const router =express.Router();

router.post('/agregarProductos', productos.agregarProductos);
router.get('/buscarProductos', productos.buscarProductos);
module.exports=router;

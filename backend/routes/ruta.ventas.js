const productos = require('../controller/use-cases/use.productos');
const cliente = require('../controller/use-cases/use.cliente');
const express = require('express');
// eslint-disable-next-line new-cap
const router =express.Router();

router.post('/agregarProductos', productos.agregarProductos);
router.get('/buscarProductos', productos.buscarProductos);
router.post('/actualizarProductos/:id', productos.actualizarProductos);
router.post('/eliminarProductos/:id', productos.eliminarProductos);

router.post('/agregarCliente', cliente.agregarClientes);

module.exports=router;

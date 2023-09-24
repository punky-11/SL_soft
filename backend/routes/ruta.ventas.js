const productos = require('../controller/use-cases/use.productos');
const cliente = require('../controller/use-cases/use.cliente');
const usuario = require('../controller/use-cases/use.usuario');
const express = require('express');
// eslint-disable-next-line new-cap
const router =express.Router();
// productos
router.post('/agregarProductos', productos.agregarProductos);
router.get('/buscarProductos', productos.buscarProductos);
router.post('/actualizarProductos/:id', productos.actualizarProductos);
router.post('/eliminarProductos/:id', productos.eliminarProductos);
// cliente
router.post('/agregarCliente', cliente.agregarClientes);
router.get('/buscarCliente', cliente.buscarClientes);
router.post('/eliminarClientes/:id', cliente.eliminarClientes);
router.post('/actualizarClientes/:id', cliente.actualizarClientes);
// usuario
router.post('/login', usuario.login);
module.exports=router;

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
/**
 * @swagger
 * components:
 *  schemas:
 *   cliente:
 *    type: object
 *    properties:
 *      nombre:
 *        type: string
 *        description: nombre del cliente
 *      apellido:
 *        type: string
 *      documento:
 *        type: string
 *      celular:
 *        type: string
 *      email:
 *        type: string
 *      direccion:
 *        type: string
 *    required:
 *       - nombre
 *       - apellido
 *       - documento
 *       - email
 *    example:
 *     nombre: alan  
 *     apellido: torres
 *     documento: 123456789
 *     celular: 123456789
 *     email: alan.@gmail.com
 *     direccion: calle 123
 */
/**
 * @swagger
 * /v1/agregarCliente:
 *  post:
 *   summary: agregar cliente
 *   description: agregar cliente
 *   tags: [cliente]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *        type: object
 *        $ref: '#/components/schemas/cliente'
 *   responses:
 *     200:
 *       description: cliente agregado
 *     500:
 *       description: error al agregar cliente   
 */      
router.post('/agregarCliente', cliente.agregarClientes);
/**
 * @swagger
 * /v1/buscarCliente:
 *   get:
 *     summary: Buscar cliente
 *     tags: [cliente]
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          email:
 *           type: string
 *           description: email del cliente
 *         required:
 *          - email
 *         example:
 *          email: alan.@gmail.com
 *      responses:
 *         200:
 *           description: Traer usuarios
 *         500:
 *           description: Error al agregar cliente
 */
router.get('/buscarCliente', cliente.buscarClientes);
/**
 * @swagger
 * /v1/eliminarClientes/{id}:
 *  post:
 *   summary: eliminar un cliente
 *   tags: [cliente]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        id:
 *         type: ObjectId
 *       example:
 *        id: 5f9c0c6e0f1a8d0c6c3e6a7a
 *   responses:
 *     200:
 *       description: se elimino el cliente
 *     500:
 *       description: error al eliminar cliente 
 */     
router.post('/eliminarClientes/:id', cliente.eliminarClientes);
router.post('/actualizarClientes/:id', cliente.actualizarClientes);
// usuario
router.post('/login', usuario.login);
module.exports=router;

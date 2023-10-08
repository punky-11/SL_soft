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
 *     type: object
 *     properties:
 *       nombre:
 *         type: String,

  apellido:
    type: String,
  documento:
    type: String,

  celular:
    type: String,

  email:
    type: String,

  direccion:
    type: String,
 */
router.post('/agregarCliente', cliente.agregarClientes);
router.get('/buscarCliente', cliente.buscarClientes);
router.post('/eliminarClientes/:id', cliente.eliminarClientes);
router.post('/actualizarClientes/:id', cliente.actualizarClientes);
// usuario
/**
* @swagger
* components:
* schemas:
* login:
* type: object
* propieties:
* correo:
* type: string
* description: el correo del usuario
* contrasena:
* type: string
* description: contrasena del usuario
* rol:
* type: string
* description: rol de usuario, sea cliente o tattoo artist
* required:
* - correo
* - contrasena
* - rol
* example:
* correo: alan@gmail.com
* contrasena: 123456789
*       rol: cliente
*
*/
/**
 * @swagger
 * /v1/login:
 *  post:
 *    summary: ingreso al login
 *    tags: [login]
 *    requestBody:
 *      required: true
 *      content:
 *      application/json:
 *        schema:
 *          type: object
 *          $ref: '#/components/schemas/login'
 *    responses:
 *      200:
 *        description: ingreso corectamente
 *
 *
 */

router.post('/login', usuario.login);
module.exports=router;

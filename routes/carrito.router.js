const express = require('express');
const router = express.Router();
const controlador = require('../controllers/carrito.controller')

//Obtiene todos los carritos en base de datos
router.get('/', controlador.carritos)

//Obtiene un carrito y muestra sus productos
router.get('/:id', controlador.carrito)

//Agregar un carrito y devolver el id
router.post('/', controlador.agregar)

//Agrega un producto a un carrito
router.post('/:id/catalogo/:id_catalogo', controlador.agregarProducto)

//Edita la cantidad de un producto en un carrito. Solo se puede editar la cantidad
router.put('/:id/producto/:id_producto',controlador.editarProducto)

//Borrar el carrito una vez el pedido fue enviado
router.delete('/:id', controlador.borrarCarrito)

//Borrar un producto del carrito
router.delete('/:id/producto/:id_producto', controlador.borrarProducto)

module.exports = router
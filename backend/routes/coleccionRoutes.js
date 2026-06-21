const { Router } = require('express');
const router = Router();
const { middlewareVideojuegos } = require("../middleware/videojuegosValidator.middleware");
const { getAllColecciones, getAllColeccionesUsuarios, getColeccionById, postColeccion, putColeccion } = require('../controllers/coleccionController');

router.get('/', getAllColecciones);
router.get('/:id', getAllColeccionesUsuario)
router.get('/:id', getColeccionById);
router.post('/', postColeccion);
router.put('/', putColeccion);
/*
router.put('/', putEstado);
router.put('/', putCalifacion);
router.put('/', putTiempoJuego);
router.delete('/', deleteColeccion);
*/
module.exports = router;
const { Router } = require('express');
const router = Router();
const { middlewareVideojuegos } = require("../middleware/videojuegosValidator.middleware");
const { getAllColecciones, getColeccionById, putEstado, putCalifacion, putTiempoJuego, deleteColeccion } = require('../controllers/coleccionController');

router.get('/', getAllColecciones);
router.get('/:id', getColeccionesById);
router.put('/', putEstado);
router.put('/', putCalifacion);
router.put('/', putTiempoJuego);
router.delete('/', deleteColeccion);

module.exports = router;
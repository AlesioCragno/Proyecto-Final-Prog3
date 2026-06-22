const { Router } = require('express');
const router = Router();
const { verificarToken } = require("../middleware/auth");
const { getAllColecciones, getAllColeccionesUsuario, getColeccionById, postColeccion, putColeccion } = require('../controllers/coleccionController');

router.use(verificarToken);

router.get('/', getAllColecciones);
router.get('/mi-lista', getAllColeccionesUsuario)
router.get('/detalle/:videojuegoId', getColeccionById);
router.post('/', postColeccion);
router.put('/:videojuegoId', putColeccion);
/*
router.put('/', putEstado);
router.put('/', putCalifacion);
router.put('/', putTiempoJuego);
router.delete('/', deleteColeccion);
*/
module.exports = router;
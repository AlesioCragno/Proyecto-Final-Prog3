const { Router } = require('express');
const router = Router();
const { middlewareVideojuegos } = require("../middleware/videojuegosValidator.middleware");
const videojuegoController = require('../controllers/videojuegoController');

// GET Obtener todos los videojuegos
router.get('/', videojuegoController.getAllVideojuegos);

// GET Obtener un videojuego por ID
router.get('/:id', videojuegoController.getVideojuegoById);

// POST Crear un nuevo videojuego
router.post('/', middlewareVideojuegos, videojuegoController.createVideojuego);

// PUT Actualizar un videojuego
router.put('/:id', videojuegoController.updateVideojuego);      // <--- VER SI LA DEJAMOS O NO

// DELETE /api/videojuegos/:id - Eliminar un videojuego
router.delete('/:id', videojuegoController.deleteVideojuego);   // <--- VER SI LA DEJAMOS O NO

module.exports = router;
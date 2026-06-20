const express = require('express');
const router = express.Router();
const videojuegoController = require('../controllers/videojuegoController');

// Definir rutas
// GET /api/videojuegos - Obtener todos los videojuegos
router.get('/', videojuegoController.getAllVideojuegos);

// GET /api/videojuegos/:id - Obtener un videojuego por ID
router.get('/:id', videojuegoController.getVideojuegoById);

// POST /api/videojuegos - Crear un nuevo videojuego
router.post('/', videojuegoController.createVideojuego);

// PUT /api/videojuegos/:id - Actualizar un videojuego
router.put('/:id', videojuegoController.updateVideojuego);

// DELETE /api/videojuegos/:id - Eliminar un videojuego
router.delete('/:id', videojuegoController.deleteVideojuego);

module.exports = router;
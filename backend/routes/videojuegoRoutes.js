const express = require('express');
const router = express.Router();
const {
  getAllVideojuegos,
  getVideojuegoById,
  createVideojuego
} = require('../controllers/videojuegoController')

// Definir rutas
// GET /api/videojuegos - Obtener todos los videojuegos
router.get('/', videojuegoController.getAllVideojuegos);

// GET /api/videojuegos/:id - Obtener un videojuego por ID
router.get('/:id', videojuegoController.getVideojuegoById);

// POST /api/videojuegos - Crear un nuevo videojuego
router.post('/', videojuegoController.createVideojuego);

module.exports = router;
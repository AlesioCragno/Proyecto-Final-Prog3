const { Router } = require('express');
const router = Router();
const { validateInputVideojuegos } = require("../middleware/videojuegosValidator.middleware");
const { getAllVideojuegos, getVideojuegoById, postVideojuego } = require('../controllers/videojuegoController');

// GET Obtener todos los videojuegos
router.get('/', getAllVideojuegos);

// GET Obtener un videojuego por ID
router.get('/:id', getVideojuegoById);

// POST Crear un nuevo videojuego
router.post('/', validateInputVideojuegos, postVideojuego);

//-------------------------------------------- ENTREGA PARCIAL 2

// PUT Actualizar un videojuego
//router.put('/:id', videojuegoController.updateVideojuego);      // <--- VER SI LA DEJAMOS O NO

// DELETE /api/videojuegos/:id - Eliminar un videojuego
//router.delete('/:id', videojuegoController.deleteVideojuego);   // <--- VER SI LA DEJAMOS O NO

module.exports = router;
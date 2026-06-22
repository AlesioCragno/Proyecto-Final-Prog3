const express = require("express");
const router = express.Router();
const authRoutes = require("./auth");
const videojuegosRoutes = require("./videojuegoRoutes");
const coleccionRoutes = require("./coleccionRoutes");

// Ruta de prueba
router.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "API funcionando correctamente",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

// Rutas de autenticacion
router.use("/auth", authRoutes);

// Rutas de videojuegos
router.use("/videojuegos", videojuegosRoutes);

// Rutas de coleccion
router.use("/colecciones", coleccionRoutes);

// Ruta de ejemplo
router.get("/test", (req, res) => {
  res.json({
    message: "Endpoint de prueba",
    data: {
      backend: "Express",
      database: "PostgreSQL",
      orm: "Sequelize",
    },
  });
});

module.exports = router;

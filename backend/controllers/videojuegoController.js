const { Videojuego } = require("../models/videojuegoModel");

// Obtener todos los videojuegos
exports.getAllVideojuegos = async (req, res) => {
  try {
    const videojuegos = await Videojuego.findAll();
    res.status(200).json(videojuegos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un videojuego por ID
exports.getVideojuegoById = async (req, res) => {
  try {
    const videojuego = await Videojuego.findByPk(req.params.id);
    if (!videojuego) {
      return res.status(404).json({ message: "Videojuego no encontrado" });
    }
    res.status(200).json(videojuego);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo videojuego
exports.createVideojuego = async (req, res) => {
  try {
    const { titulo, descripcion, genero, plataforma } = req.body;
    const videojuego = await Videojuego.create({
      titulo,
      descripcion,
      genero,
      plataforma,
    });
    res.status(201).json(videojuego);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un videojuego (con validación de existencia)
exports.updateVideojuego = async (req, res) => {
  try {
    const { titulo, descripcion, genero, plataforma } = req.body;

    const videojuego = await Videojuego.findByPk(req.params.id);
    if (!videojuego) {
      return res.status(404).json({ message: "Videojuego no encontrado" });
    }

    await videojuego.update({ titulo, descripcion, genero, plataforma });
    res.status(200).json(videojuego);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un videojuego (con validación de existencia)
exports.deleteVideojuego = async (req, res) => {
  try {
    const deletedRows = await Videojuego.destroy({
      where: { id: req.params.id },
    });

    if (!deletedRows) {
      return res.status(404).json({ message: "Videojuego no encontrado" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

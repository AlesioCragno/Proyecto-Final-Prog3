const fs = require("fs").promises;
const { Videojuego } = require("../models/videojuegoModel");

// OBTENER TODOS LOS VIDEOJUEGOS
const getAllVideojuegos = async (req, res, next) => {
  try {
    // Busca los videojuegos
    const videojuegos = await Videojuego.findAll();

    // Gestiona un error si no se encuentran videojuegos
    if (!videojuegos || videojuegos === undefined) {
      return res.status(404).json({ message: "No se encontraron videojuegos cargados en el sistema"})
    }

    // Retorna la lista de videojuegos
    return res.status(200).json(videojuegos);

  } catch (error) {

    // Imprime por consola el error y lo envia al handler
    console.log(error)
    next(error);
  }
};

// OBTENER VIDEOJUEGO POR ID
const getVideojuegoById = async (req, res, next) => {
  try {
    // Obtiene el id de los parametros de la direccion
    const { id } = req.params

    // Busca el videojuego con la id obtenida
    const videojuego = await Videojuego.findById(id);

    // Gestiona un error si no se encuentra el videojuego
    if (!videojuego || videojuego === undefined) {
      return res.status(404).json({ message: "Videojuego no encontrado" });
    }

    // Retorna el videojuego buscado
    return res.status(200).json(videojuego);
  } catch (error) {

    // Imprime por consola el error y lo envia al handler
    console.log(error)
    next(error)
  }
};

// Crear un nuevo videojuego
const postVideojuego = async (req, res, next) => {
  try {
    // Obtiene los atributos del body de la peticion
    const { nombre, descripcion, genero, plataforma } = req.body;

    // Crea un nuevo videojuego en base al modelo
    Videojuego.create(nombre, descripcion, genero, plataforma);

    // Busca el ultimo videojuego (es decir el que se acaba de agregar)
    const videojuegoCreado = Videojuego.findLastOne()

    // Retorna el juego que se acaba de agregar
    return res.status(201).json(videojuegoCreado);
  } catch (error) {

    // Imprime por consola el error y lo envia al handler
    console.log(error)
    next(error)
  }
};

// ----------------------------------------------------------------- PRIMERA REVISION

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

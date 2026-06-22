const { Coleccion } = require("../models/coleccionModel")

const getAllColecciones = async (req, res, next) => {
    try {
        const colecciones = await Coleccion.findAll()
        return res.status(200).json(colecciones)
    } catch (error) {
        next(error)
    }
}

const getAllColeccionesUsuario = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const coleccionesUsuario = await Coleccion.findAllByUsuario(userId);

        if (!coleccionesUsuario || coleccionesUsuario.length === 0) {
            return res.status(404).json({ message: "Colección no encontrada." });
        }
        return res.status(200).json(coleccionesUsuario);

    } catch (error){
        // Imprime por consola el error y lo envia al handler
        console.log(error)
        next(error)
    }
};

const getColeccionById = async (req, res) => {
    try {
        const userId = req.user.id;
        const { videojuegoId } = req.params; 

        const coleccionExiste = await Coleccion.findByUsuarioIdYJuegoId(userId,videojuegoId);
        if (!coleccionExiste) {
            return res.status(404).json({ message: "Colección no encontrada." });
        }
        return res.status(200).json(coleccionExiste);

    } catch (error){
        // Imprime por consola el error y lo envia al handler
        console.log(error)
        next(error)
    }
};


const postColeccion = async (req, res, next) => {
  try {
    // Obtiene los atributos del body de la peticion
    console.log("Obteniendo los atributos del body de la peticion")
    const userId = req.user.id;
    const { videojuegoId, estado, calificacion, tiempoJuego } = req.body;

    // Crea una nueva coleccion en base al modelo
    console.log("Creando un coleccion con los atributos obtenidos")
    const nuevaColeccion = await Coleccion.create({
        userId,
        videojuegoId,
        estado,
        calificacion,
        tiempoJuego
    });

    return res.status(201).json(nuevaColeccion);

  } catch (error) {
    console.log(error)
    next(error)
  }
};

const putColeccion = async (req, res, next) => {
  try {
        const userId = req.user.id;
        const { videojuegoId } = req.params;
        const { estado, calificacion, tiempoJuego } = req.body;

        const coleccion = await Coleccion.findByUsuarioIdYJuegoId(userId,videojuegoId);
        if (!coleccion) {
            return res.status(404).json({ message: 'La colección no existe.' });
        }
        await coleccion.update({
            estado,
            calificacion,
            tiempoJuego
        });

        return res.status(200).json(coleccion);
  } catch (error) {
    console.log(error)
    next(error)
  }
};


module.exports = { getAllColecciones, getAllColeccionesUsuario, getColeccionById, postColeccion, putColeccion}
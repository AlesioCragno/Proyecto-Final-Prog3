const fs = require("fs")
const { ColeccionModel } = require("../models/coleccionModel")

const getAllColecciones = async (req, res, next) => {
    try {
        const colecciones = ColeccionModel.findAll()
        return res.status(200).json(colecciones)
    } catch (error) {
        next(error)
    }
}

const getAllColeccionesUsuario = async (req, res) => {
    try {
        const { userId } = req.params;

        const coleccionesUsuario =await Coleccion.findByUsuarioIdYJuegoId(userId);
        if (!coleccionesUsuario) {
            return res.status(404).json({
                success: false,
                error: "Colección no encontrada."
            });
        }
        return res.status(200).json({
            success: true,
            data: coleccionesUsuario
        });

    } catch (error){
    // Imprime por consola el error y lo envia al handler
    console.log(error)
    next(error)
    }
};

const getColeccionById = async (req, res) => {
    try {
        const { userId } = req.params;
        const {videojuegoId} = req.body; 

        const coleccionExiste =await Coleccion.findByUsuarioIdYJuegoId(userId,videojuegoId);
        if (!coleccionExiste) {
            return res.status(404).json({
                success: false,
                error: "Colección no encontrada."
            });
        }
        return res.status(200).json({
            success: true,
            data: coleccionExiste
        });

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
    const { userId, videojuegoId, estado, calificacion, tiempoJuego } = req.body;

    // Crea una nueva coleccion en base al modelo
    console.log("Creando un coleccion con los atributos obtenidos")
    Coleccion.createColeccion(userId, videojuegoId, estado, calificacion, tiempoJuego);

  } catch (error) {
    console.log(error)
    next(error)
  }
};

const putColeccion = async (req, res, next) => {
  try {
        const { userId, videojuegoId } = req.params;
        const { estado, calificacion, tiempoJuego } = req.body;

        const coleccion = await Coleccion.findByUsuarioIdYJuegoId(userId,videojuegoId);
        if (!coleccion) {
            return res.status(404).json({
                success: false,
                error: 'La colección no existe.'
            });
        }
        await coleccion.update({
            estado,
            calificacion,
            tiempoJuego
        });

        return res.status(200).json({
            success: true,
            data: coleccion
        });

  } catch (error) {
    console.log(error)
    next(error)
  }
};


module.exports = { getAllColecciones, getAllColeccionesUsuario, getColeccionById, postColeccion, putColeccion}
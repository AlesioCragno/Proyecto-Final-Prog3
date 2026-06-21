const fs = require("fs")
const { ColeccionModel } = require("../models/coleccionModel")

const getAllColecciones = async (req, res, next) => {
    try {
        const coleciones = ColeccionModel.findAll()
        return res.status(200).json(colecciones)
    } catch (error) {
        next(error)
    }
}
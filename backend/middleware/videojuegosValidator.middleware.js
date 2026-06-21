const validateInputVideojuegos = (req, res, next) => {
    const { nombre, descripcion, genero, plataforma } = req.body
    const error = []

    if (nombre && typeof nombre !== "string") {
        error.push("El campo nombre debe ser 'string'")
    }

    if (descripcion && typeof descripcion !== "string") {
        error.push("El campo descripcion debe ser 'string'")
    }

    if (genero && typeof genero !== "string") {
        error.push("El campo genero debe ser 'string'")
    }

    if (plataforma && typeof plataforma !== "string") {
        error.push("El campo plataforma debe ser 'string'")
    }

    if (error.length > 0) {
        return res.status(400).json({ error })
    }

    next()
}

module.exports = { validateInputVideojuegos }
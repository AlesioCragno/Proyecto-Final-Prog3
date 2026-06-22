const validateInputColecciones = (req, res, next) => {
    const { videojuegoId, estado, calificacion, tiempoJuego } = req.body
    const error = []

    if (req.method === "POST") {
        if (!videojuegoId || typeof videojuegoId !== "number" || videojuegoId <= 0) {
            error.push("Mensaje de error NASHEI")
        }
    }

    if (estado !== undefined) {
        const estadosValidos = ["pendiente", "jugando", "completado"]
        if (!estadosValidos.includes(estado)) {
            error.push("Otro mensaje de error ANACHEI")
        }
    }

    if (calificacion !== undefined) {
        if (typeof calificacion !== "number" || calificacion < 0 || calificacion > 10) {
            error.push("OTRO MENSAJE")
        }
    }

    if (tiempoJuego !== undefined) {
        if (typeof tiempoJuego !== "number" || tiempoJuego < 0) {
            error.push("ERROR MSG")
        }
    }

    if (error.length > 0) {
        return res.status(400).json({ error })
    }

    next()
}

module.exports = { validateInputColecciones }
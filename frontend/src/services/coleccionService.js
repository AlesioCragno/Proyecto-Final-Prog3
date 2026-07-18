const API_URL = "https://proyecto-final-prog3.onrender.com/api/colecciones"

const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}`: ""
    };
};

export const coleccionService = {
    // GET /api/colecciones (listar todas las colecciones)
    getAll: async () => {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Error al obtener todas las colecciones");
        return await response.json();
    },

    // GET /api/colecciones/mi-lista (obtener lista de juegos del usuario logueado)
    getMiLista: async () => {
        const response = await fetch(`${API_URL}/mi-lista`, {
            method: "GET",
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error("Error al obtener tu lista de videojuegos");
        return await response.json();
    },

    // GET /api/colecciones/detalle/:id (ver detalle de un juego específico en la coleccion del usuario logueado)
    getDetalle: async (id) => {
        const response = await fetch(`${API_URL}/detalle/${id}`, {
            method: "GET",
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error("Error al obtener el detalle de tu juego");
        return await response.json();
    },

    // POST /api/colecciones (agregar un videojuego a la coleccion del usuario logueado)
    addAColeccion: async (juego) => {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify(juego),
        });
        if (!response.ok) throw new Error("Error al agregar el juego a la coleccion");
        return await response.json();
    },

    // PUT /api/colecciones/:id (actualizar estado de un juego de la coleccion del usuario logueado)
    update: async (videojuegoId, datosActualizados) => {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: getAuthHeaders(),
            body: JSON.stringify({
                estado: datosActualizados.estado,
                calificacion: datosActualizados.calificacion,
                tiempoJuego: datosActualizados.tiempoJuego
            }),
        });
        if (!response.ok) throw new Error("Error al actualizar el estado del juego");
        return await response.json();
    },
};
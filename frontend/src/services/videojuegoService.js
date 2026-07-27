const API_URL = "https://proyecto-final-prog3.onrender.com/api/videojuegos"

const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}`: ""
    };
};

export const videojuegoService = {

    // GET /api/videojuegos (obtener lista de juegos)
    getAll: async () => {
        const response = await fetch(API_URL);

        if (!response.ok) throw new Error("Error al obtener la lista de videojuegos");
        
        const data = await response.json();

        return Array.isArray(data) ? data : (data.videojuegos || [])
    },

    // GET /api/videojuegos/:id (ver detalle de un juego específico)
    getId: async (id) => {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "GET",
            headers: getAuthHeaders(),
        });
        if (!response.ok) throw new Error("Error al obtener el detalle del juego");
        return await response.json();
    },

    // POST /api/videojuego (crear un nuevo videojuego)
    addVideojuego: async (juego) => {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify(juego),
        });
        if (!response.ok) throw new Error("Error al crear un videojuego");
        return await response.json();
    },

};
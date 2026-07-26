const API_URL = "https://proyecto-final-prog3.onrender.com/api/usuarios"

export const usuarioService = {
  obtenerUsuarios: async () => {
    const respuesta = await fetch(`${API_URL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const datos = await respuesta.json();

    if (!respuesta.ok) {
      throw new Error(
        datos.error || "No fue posible obtener los usuarios"
      );
    }

    return datos;
  },

  obtenerPerfil: async () => {
    const token = localStorage.getItem("token");

    const respuesta = await fetch(`${API_URL}/perfil`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const datos = await respuesta.json();

    if (!respuesta.ok) {
      throw new Error(datos.error || "No fue posible obtener el perfil");
    }

    return datos;
  },
};
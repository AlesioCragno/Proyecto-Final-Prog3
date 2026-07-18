import React, { useState, useEffect } from "react";
import { coleccionService } from "../services/coleccionService";

export const GestionColecciones = () => {
    const [misJuegos, setMisJuegos] = useState([]);
    const [error, setError] = useState("");

    const [form, setForm] = useState({
        videojuegoId: "",
        estado: "pendiente",
        tiempoJuego: 0,
        calificacion: 0,
    });
    const [isEditing, setIsEditing] = useState(false);

    // Obtener los juegos del usuario 
    const cargarMiLista = async () => {
        try {
            setError("");
            const datos = await coleccionService.getMiLista();
            setMisJuegos(datos);
        } catch (err) {
            setError(err.message || "Error al cargar tu lista personal.");
        }
    };

    useEffect(() => {
        cargarMiLista();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await coleccionService.update(form.videojuegoId, {
                    estado: form.estado,
                    tiempoJuego: Number(form.tiempoJuego),
                    calificacion: Number(form.calificacion),
                });

                setForm({ id: "", estado: "pendiente", tiempoJuego: 0, calificacion: 0 });
                setIsEditing(false)
                cargarMiLista();
            }
        } catch (err) {
            setError(err.message || "Error al actualizar el progreso.");
        }
    };

    const handleEditClick = (juego) => {
        setForm({
            videojuegoId: juego.videojuegoId,
            estado: juego.estado || "pendiente",
            tiempoJuego: juego.tiempoJuego || 0,
            calificacion: juego.calificacion || 0,
        });
        setIsEditing(true);
    };
    
    return (
        <div>
            <h2>Mi Lista de Videojuegos</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* FORMULARIO DE EDICIÓN DE PROGRESO */}
            {isEditing && (
                <form onSubmit={handleSubmit}>
                    <h3>
                        Actualizar Progreso de: {" "}
                        {misJuegos.find(j => j.videojuegoId === form.videojuegoId)?.Videojuego?.nombre || "Cargando..."}
                    </h3>

                    <div>
                        <label>Estado: </label>
                        <select name="estado" value={form.estado} onChange={handleChange}>
                            <option value="pendiente">Pendiente</option>
                            <option value="jugando">Jugando</option>
                            <option value="completado">Completado</option>
                        </select>
                    </div>

                    <div>
                        <label>Tiempo Jugado (Horas): </label>
                        <input
                        type="number"
                        name="tiempoJuego"
                        value={form.tiempoJuego}
                        onChange={handleChange}
                        min="0"
                        required
                        />
                    </div>

                    <div>
                        <label>Calificación (0-10): </label>
                        <input
                        type="number"
                        name="calificacion"
                        value={form.calificacion}
                        onChange={handleChange}
                        min="0"
                        max="10"
                        required
                        />
                    </div>

                    <button type="submit">Guardar Cambios</button>
                    <button
                        type="button"
                        onClick={() => {
                        setIsEditing(false);
                        setForm({ videojuegoId: '', estado: 'pendiente', tiempoJuego: 0, calificacion: 0 });
                        }}
                    >Cancelar</button>
                </form>
            )}

            <hr />

            {/* TABLA DE MI COLECCIÓN */}
            <table border="1" style={{ width: '100%', textAlign: 'left', marginTop: '20px' }}>
                <thead>
                <tr>
                    <th>Videojuego</th>
                    <th>Estado</th>
                    <th>Horas Jugadas</th>
                    <th>Calificacion</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {misJuegos.length === 0 ? (
                    <tr>
                        <td colSpan="5">
                            No agregaste ningún juego a tu lista todavía.
                        </td>
                    </tr>
                ) : (
                    misJuegos.map((item) => (
                        <tr key={item.videojuegoId}>
                            <td>{item.Videojuego ? item.Videojuego.nombre : `Juego ID: ${item.videojuegoId}`}</td>
                            <td>{item.estado}</td>
                            <td>{item.tiempoJuego} hs</td>
                            <td>{item.calificacion > 0 ? `${item.calificacion}/10` : 'Sin calificar'}</td>
                            <td>
                            <button onClick={() => handleEditClick(item)}>Editar Progreso</button>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
};
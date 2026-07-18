import React, { useState, useEffect } from "react";
import { coleccionService } from "../services/coleccionService";

export const GestionColecciones = () => {
    const [misJuegos, setMisJuegos] = useState([]);
    const [error, setError] = useState("");
    const [form, setForm] = useState({
        id: "",
        estado: "Pendiente",
        tiempoJugado: 0,
        nota: 0,
    });
    const [isEditing, setIsEditing] = useState(false);

    // Obtener los juegos del usuario 
    const cargarMiLista = async () => {
        try {
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
                await coleccionService.update(form.id, {
                    estado: form.estado,
                    tiempoJugado: Number(form.tiempoJugado),
                    nota: Number(form.nota),
                });

                setForm({ id: "", estado: "Pendiente", tiempoJugado: 0, nota: 0 });
                setIsEditing(false)
                cargarMiLista();
            }
        } catch (err) {
            setError(err.message || "Error al actualizar el progreso.");
        }
    };

    const handleEditClick = (juego) => {
        setForm({
            id: juego.id,
            estado: juego.estado || "Pendiente",
            tiempoJugado: juego.tiempoJugado || 0,
            nota: juego.nota || 0,
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
                    <h3>Actualizar Progreso del Juego</h3>

                    <div>
                        <label>Estado: </label>
                        <select name="estado" value={form.estado} onChange={handleChange}>
                        <option value="Pendiente">Pendiente</option>
                        <option value="Jugando">Jugando</option>
                        <option value="Completado">Completado</option>
                        </select>
                    </div>

                    <div>
                        <label>Tiempo Jugado (Horas): </label>
                        <input
                        type="number"
                        name="tiempoJugado"
                        value={form.tiempoJugado}
                        onChange={handleChange}
                        min="0"
                        required
                        />
                    </div>

                    <div>
                        <label>Nota / Calificación (0-10): </label>
                        <input
                        type="number"
                        name="nota"
                        value={form.nota}
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
                        setForm({ id: '', estado: 'Pendiente', tiempoJugado: 0, nota: 0 });
                        }}
                    >Cancelar</button>
                </form>
            )}

            <hr />

            {/* TABLA DE MI COLECCIÓN */}
            <table border="1" style={{ width: '100%', textAlign: 'left', marginTop: '20px' }}>
                <thead>
                <tr>
                    <th>Videojuego (Título)</th>
                    <th>Estado</th>
                    <th>Horas Jugadas</th>
                    <th>Nota</th>
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
                    <tr key={item.id}>
                        <td>{item.Videojuego ? item.Videojuego.titulo : `Juego ID: ${item.videojuegoId}`}</td>
                        <td>{item.estado}</td>
                        <td>{item.tiempoJugado} hs</td>
                        <td>{item.nota > 0 ? `${item.nota}/10` : 'Sin calificar'}</td>
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
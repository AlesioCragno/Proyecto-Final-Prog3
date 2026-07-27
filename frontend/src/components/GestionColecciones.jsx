import React, { useState, useEffect } from "react";
import { coleccionService } from "../services/coleccionService";
import "../styles/components/gestionColecciones.css";

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

    const cargarMiLista = async () => {

        try {
            setError("");
            const datos = await coleccionService.getMiLista();

            setMisJuegos(datos);

        } catch (err) {

            setError(err.message);

        }

    };

    useEffect(() => {

        cargarMiLista();

    }, []);

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

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

                setForm({ videojuegoId: "", estado: "pendiente", tiempoJuego: 0, calificacion: 0 });
                setIsEditing(false)
                cargarMiLista();
            }
        } catch (err) {

            setError(err.message);

        }

    };

    const editarJuego = (juego) => {

        setForm({

            videojuegoId: juego.videojuegoId,

            estado: juego.estado,

            tiempoJuego: juego.tiempoJuego,

            calificacion: juego.calificacion

        });

        setIsEditing(true);

    };

    return (
        <div>
            <h2>Mi Lista de Videojuegos</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* FORMULARIO DE EDICIÓN DE PROGRESO */}
            {isEditing && (
                <form onSubmit={handleSubmit} style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <h3>
                        Actualizar Progreso de: {" "}
                        {misJuegos.find(j => j.videojuegoId === form.videojuegoId)?.Videojuego?.nombre || "Cargando..."}
                    </h3>

                    <label>Estado</label>
                    <select
                        name="estado"
                        value={form.estado}
                        onChange={handleChange}
                    >
                        <option value="pendiente">Pendiente</option>
                        <option value="jugando">Jugando</option>
                        <option value="completado">Completado</option>

                    </select>

                    <label>Horas Jugadas</label>

                    <input
                        type="number"
                        name="tiempoJuego"
                        value={form.tiempoJuego}
                        onChange={handleChange}
                    />

                    <label>Calificación</label>

                    <input
                        type="number"
                        name="calificacion"
                        min="0"
                        max="10"
                        value={form.calificacion}
                        onChange={handleChange}
                    />

                    <div className="botones-form">
                        <button type="submit" className="cancelar">Guardar Cambios</button>
                        <button
                            type="button"
                            onClick={() => {
                            setIsEditing(false);
                            setForm({ videojuegoId: '', estado: 'pendiente', tiempoJuego: 0, calificacion: 0 });
                            }}
                        >Cancelar</button>
                    </div>
                </form>

            )}

            <div className="grid-coleccion">{
                    misJuegos.length === 0 ?
                        <div className="sin-juegos">
                            Todavía no agregaste videojuegos a tu coleccion.
                        </div>
                        :

                        misJuegos.map((item) => (
                            <div className="card-coleccion"
                                key={item.videojuegoId}
                            >
                                <h3>{
                                        item.Videojuego ?
                                            item.Videojuego.nombre
                                            :
                                            "Videojuego"
                                    }
                                </h3>

                                <p>Estado
                                    <strong>
                                        {item.estado}
                                    </strong>
                                </p>

                                <p>Horas
                                    <strong>{item.tiempoJuego} hs</strong>
                                </p>

                                <p>Calificación
                                    <strong>
                                        {
                                            item.calificacion > 0 ?

                                                `${item.calificacion}/10`

                                                :

                                                "Sin calificar"
                                        }
                                    </strong>
                                </p>
                                <button
                                    className="editar-btn"
                                    onClick={() => editarJuego(item)}
                                >Editar progreso</button>
                            </div>

                        ))

                }

            </div>

        </div>

    );

};
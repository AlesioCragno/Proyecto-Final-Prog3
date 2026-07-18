import React, { useState } from "react";
import { authService } from "../../services/authService";
import e from "cors";

export const Register = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [exito, setExito] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const datos = await authService.register(nombre, email, password);

            if (datos && datos.token) {
                localStorage.setItem("token", datos.token);
            }
            setExito(true)

            setTimeout(() => {
                window.location.href = "/perfil";
            }, 2000);
        } catch (err) {
            setError(err.message || "Error al registrar al usuario");
        }
    };

    return (
        <div>
            <h3>Registro de nuevo Usuario</h3>

            {error && <div style={{ color: "red" }}>{error}</div>}

            {exito && (<div style={{ color: "green"}}>Registrado con exito.</div>)}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                </div>

                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>

                <div>
                    <label>Contraseña:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>

                <button type="submit">Registrar</button>
            </form>

            <p>
                ¿Ya tenes cuenta? <a href="/login">Inicia sesion</a>
            </p>
        </div>
    );
};
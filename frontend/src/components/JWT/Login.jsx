import React, { useState } from "react";
import { Link } from "react-router-dom";
import { authService } from "../../services/authService";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [exito, setExito] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const datos = await authService.login(email, password);

      if (datos.token) {
        localStorage.setItem("token", datos.token);
      }

      setExito(true);

      setTimeout(() => {
        window.location.href = "/perfil";
      }, 1500);
    } catch (err) {
      setError(err.message || "Error al iniciar sesión");
    }
  };

  return (
    <div>
      <h3>Iniciar Sesión</h3>

      {error && <div style={{ color: "red" }}>{error}</div>}

      {exito && (
        <div style={{ color: "green" }}>
          Inicio de sesión exitoso.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Ingresar</button>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <span>¿No tenes un usuario?</span>
          <Link to="/register">Registrate</Link>
        </div>
      </form>
    </div>
  );
};
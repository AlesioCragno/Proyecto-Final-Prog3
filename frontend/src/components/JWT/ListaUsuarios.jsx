import React, { useState, useEffect } from "react";
import { authService } from "../../services/authService";

export const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarUsuarios = async () => {
      try {
        setError("");
        const datos = await authService.getAllUsers();
        setUsuarios(datos || []);
      } catch (err) {
        setError(err.message || "Error al cargar la lista de usuarios.");
      }
    };

    cargarUsuarios();
  }, []);

  return (
    <div className="usuarios-container">
      <h3>Listado General de Usuarios Registrados</h3>

      {error && <div className="usuarios-error">{error}</div>}

      <table className="usuarios-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.length === 0 ? (
            <tr>
              <td colSpan="3">No hay usuarios registrados</td>
            </tr>
          ) : (
            usuarios.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nombre}</td>
                <td>{user.email}</td>
              </tr>
              ))
            )
          }
        </tbody>
      </table>
    </div>
  );
};

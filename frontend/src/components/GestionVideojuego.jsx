import React, { useState, useEffect } from 'react';
import { videojuegoService } from '../services/videojuegoService.js'; //// falta hacer, chequear ruta
// import '../styles/components/gestionVideojuego.css'; // falta hacer, chequear ruta

export const GestionVideojuego = () => {
  const [videojuegos, setVideojuegos] = useState([]);
  const [error, setError] = useState('');

  // Usamos useEffect para pedir los videojuegos automáticamente al cargar el componente
  useEffect(() => {
    const pedirVideojuegos = async () => {
      try {
        // Llamamos al servicio, como es una promesa usamos 'await'
        const datos = await videojuegoService.getAllVideojuegos();

        // Guardamos los videojuegos en el estado para que se actualice
        setVideojuegos(datos);
      } catch (err) {
        setError(err.message);
      }
    };

    pedirVideojuegos();
  }, []); // dejar los '[]' es lo que hace que suceda todo lo anterior ni bien carga el componente y no luego de otro

  return (
    <div className="contenedor-videojuegos">
      <h3>Listado Oficial de Videojuegos</h3>

      {/* Si hay un error, lo renderizamos y mostramos */}
      {error && <div className="mensaje-error">{error}</div>}

      <table className="tabla-videojuegos">
        <thead>
          <tr className="encabezado-tabla">
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Género</th>
            <th>Plataforma</th>
          </tr>
        </thead>
        <tbody>
          {/* Recorremos el array con el estado de los videojuegos .map */}
          {videojuegos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.descripcion}</td>
              <td>{item.genero}</td>
              <td>{item.plataforma}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
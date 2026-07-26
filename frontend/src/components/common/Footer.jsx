// src/components/common/Footer.jsx
import React from 'react';
import '../../styles/components/footer.css';

export const Footer = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-contenido">
        <p>
          &copy; {anioActual} - Coleccion de Videojuegos. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};
import React, { useState } from 'react';
import '../../styles/components/navbar.css';

export const Navbar = () => {
  // Simulamos un estado para saber si el usuario está logueado o no
  const [Logged, setIsLogged] = useState(false);

  const handleAuthClick = () => {
    setIsLogged(!Logged);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <h2>
            Coleccion de videojuegos
          </h2>
        </a>
      </div>

      <ul className="navbar-links">
        <li>
          <a href="/usuario">Inicio - Perfil</a>
        </li>
        <li>
          <a href="/videojuegos">Videojuegos</a>
        </li>
        <li>
          <a href="/colecciones">Colecciones</a>
        </li>
      </ul>

      <div className="navbar-auth">
        {Logged ? (
          <button className="btn-logout" onClick={handleAuthClick}>
            Log out
          </button>
        ) : (
          <a href="/login">
            <button className="btn-login" onClick={handleAuthClick}>
              Log in
            </button>
          </a>
        )}
      </div>
    </nav>
  );
};
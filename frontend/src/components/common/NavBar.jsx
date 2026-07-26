import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/components/navbar.css";

export const Navbar = () => {

  const [logged, setLogged] = useState(false);

  const handleAuthClick = () => {
    setLogged(!logged);
  };

  return (

    <nav className="navbar">

      <div className="navbar-logo">

        <Link to="/">
          <h2>🎮 Colección de Videojuegos</h2>
        </Link>

      </div>

      <ul className="navbar-links">

        <li>
          <Link to="/perfil">
            Perfil
          </Link>
        </li>

        <li>
          <Link to="/videojuegos">
            Videojuegos
          </Link>
        </li>

        <li>
          <Link to="/colecciones">
            Colecciones
          </Link>
        </li>

        <li>
          <Link to="/usuarios">
            Usuarios
          </Link>
        </li>

      </ul>

      <div className="navbar-auth">

        {logged ? (

          <button
            className="btn-logout"
            onClick={handleAuthClick}
          >
            Log out
          </button>

        ) : (

          <Link to="/login">

            <button
              className="btn-login"
              onClick={handleAuthClick}
            >
              Log in
            </button>

          </Link>

        )}

      </div>

    </nav>

  );

};
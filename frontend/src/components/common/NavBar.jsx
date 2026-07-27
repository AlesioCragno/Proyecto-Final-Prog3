import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/components/navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  const isAuth = Boolean(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/register");
  }

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

      </ul>

      <div className="navbar-auth">
        {isAuth ? (
          <button className="btn-logout" onClick={handleLogout}>
            Cerrar Sesion
          </button>
        ) : (
          <Link to="/register">
            <button className="btn-login">
              Iniciar Sesion / Registro
            </button>
          </Link>
        )}

      </div>

    </nav>

  );

};
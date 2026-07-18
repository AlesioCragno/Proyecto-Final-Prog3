import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Componentes comunes
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";

// Componentes de gestion
import { GestionUsuarios } from "./components/GestionUsuarios";
import { GestionVideojuegos} from "./components/GestionVideojuegos";
import { GestionColecciones} from "./components/GestionColecciones";

// JWT
import { Login } from "./components/JWT/Login"
import { Register } from "./components/JWT/Register";
import { Perfil } from "./components/JWT/Perfil";
import { ListaUsuarios } from "./components/JWT/ListaUsuarios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>¡Bienvenido a tu nueva aplicación!</h1>
        <p>Frontend React funcionando correctamente</p>
        <p>
          <a href="/api/health" target="_blank" rel="noopener noreferrer">
            Verificar estado de la API
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;

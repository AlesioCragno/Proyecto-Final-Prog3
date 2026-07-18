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
    <Router>
      <div className="App">
        <Navbar/>

        <main style={{ padding: "20px"}}>
          <h1>Panel de Control - Coleccion de Videojuegos</h1>

          <Routes>
            {/* Rutas del catalogo y colecciones */}
            <Route path="/" element={<GestionVideojuegos/>}/>
            <Route path="/videojuegos" element={<GestionVideojuegos/>}/>
            <Route path="/colecciones" element={<GestionColecciones/>}/>
            <Route path="/usuarios" element={<GestionUsuarios/>}/>

            {/* Rutas de JWT */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/perfil" element={<Perfil/>}/>
            <Route path="/lista-usuarios" element={<ListaUsuarios/>}/>

          </Routes>
        </main>

        <Footer/>
      </div>
    </Router> 
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Componentes comunes
import { Navbar } from "./components/common/NavBar";
import { Footer } from "./components/common/Footer";

// Componentes de gestion
//import { GestionUsuarios } from "./components/GestionUsuarios";
import { GestionVideojuegos } from "./components/GestionVideojuego";
import { GestionColecciones} from "./components/GestionColecciones";

// JWT
//import { Login } from "./components/JWT/Login"
import { Register } from "./components/JWT/Register";
import { Perfil } from "./components/JWT/Perfil";
import { ListaUsuarios } from "./components/JWT/ListaUsuarios";

function App() {

  return (

    <Router>

      <div className="App">

        <Navbar />

        <main className="main-content">

          <div className="page-header">

            <h1 className="page-title">
              🎮 Panel de Control
            </h1>

            <p className="page-subtitle">
              Administrá tu colección de videojuegos,
              seguí tu progreso y organizá todos tus juegos.
            </p>

          </div>

          <Routes>
            
            {/* Rutas del catalogo y colecciones */}
            <Route path="/" element={<GestionVideojuegos/>}/>
            <Route path="/videojuegos" element={<GestionVideojuegos/>}/>
            <Route path="/colecciones" element={<GestionColecciones/>}/>
            {/*<Route path="/usuarios" element={<GestionUsuarios/>}/>*/}

            {/* Rutas de JWT */}
            {/*<Route path="/login" element={<Login/>}/>*/}
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

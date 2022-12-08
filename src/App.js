import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/navbar"
import { Usuario } from './usuario/usuario';
import { TipoPessoa } from './tipopessoa/tipopessoa';
function App() {
return (
    <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<TipoPessoa/> } />
            <Route path="/fisica" element={<Usuario/>} />
            <Route path="/juridica"/>
          </Routes>
        </Router>
  </div>
);
}


export default App;

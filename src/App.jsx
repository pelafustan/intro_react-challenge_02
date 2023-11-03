import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from 'react';
import Registro from './components/Registro';
import { useState } from "react";

function App() {
  // estado para configurar componente Alert: dentro de Formulario, estadoAlerta puede ser "success" o "danger"
  const [estadoAlerta, setEstadoAlerta] = useState("");
  return (
    <>
      <Registro estadoAlerta={estadoAlerta} setEstadoAlerta={setEstadoAlerta} />
    </>
  )
}

export default App

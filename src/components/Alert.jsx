import { useState } from 'react';
import { Alert as Alerta } from 'react-bootstrap';

const Alert = ({ estado }) => {
  let mensaje = "";

  if (estado == "danger") {
    mensaje = "Completa todos los campos!";
  }
  if (estado == "success") {
    mensaje = "Cuenta creada exitosamente!";
  }
  
  return (
    <>
      {estado != "" ? <Alerta variant={estado}>{mensaje}</Alerta> : null}
    </>
  )
};

export default Alert;

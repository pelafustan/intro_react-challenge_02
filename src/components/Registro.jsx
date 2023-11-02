import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";
import { useState } from "react";

const Registro = () => {
  // estado para configurar componente Alert: dentro de Formulario, estadoAlerta puede ser "success" o "danger"
  const [estadoAlerta, setEstadoAlerta] = useState("");
  return (
    <>
      <Formulario setEstadoAlerta={setEstadoAlerta} />
      <Alert estado={estadoAlerta} />
    </>
  )
};

export default Registro;

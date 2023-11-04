import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";

const Registro = ({ estadoAlerta, setEstadoAlerta }) => {
  return (
    <>
      <h1>Crea una cuenta</h1>
      <SocialButton github facebook linkedin/>
      <p>O usa tu email para registrarte</p>
      <Formulario setEstadoAlerta={setEstadoAlerta} />
      <Alert estado={estadoAlerta} />
    </>
  )
};

export default Registro;

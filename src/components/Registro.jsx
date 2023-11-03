import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";

const Registro = ({estadoAlerta, setEstadoAlerta}) => {
  return (
    <>
      <Formulario setEstadoAlerta={setEstadoAlerta} />
      <Alert estado={estadoAlerta} />
    </>
  )
};

export default Registro;

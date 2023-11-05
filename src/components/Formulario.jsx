import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const Formulario = ({ setEstadoAlerta }) => {
  // regex para validación
  const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const nameRegex = /^([a-zA-Z]{2,}\s?)+$/;

  // una variable y un setter para todo los inputs del formulario
  const [data, setData] = useState({
    userName: "",
    userMail: "",
    userPass: "",
    userPassConfirm: "",
  });

  // objeto para revisar si inputs han obtenido foco
  const [wasFocused, setWasFocused] = useState({
    userName: false,
    userMail: false,
    userPass: false,
    userPassConfirm: false,
  });

  // función que se encarga de gestionar el evento onChange de los inputs
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  // función que se encarga de cambiar el estado de `wasFocused`
  const handleFocus = (event) => {
    setWasFocused({
      ...wasFocused,
      [event.target.name]: true,
    });
  }

  // variable de validación para el formulario
  const [validated, setValidated] = useState(false);

  // función que se encarga de gestionar el evento onSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setEstadoAlerta("danger");
    } else {
      setEstadoAlerta("success");
      setValidated(true);
    }
  }

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Control
            required
            name="userName"
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
            onFocus={handleFocus}
            isValid={nameRegex.test(data.userName) && wasFocused.userName}
            isInvalid={!/^([a-zA-Z]{2,}\s?)+$/.test(data.userName) && wasFocused.userName}
          />
          <Form.Control.Feedback type="invalid">Ingresa un nombre</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            required
            name="userMail"
            type="email"
            placeholder="user@example.com"
            onChange={handleChange}
            onFocus={handleFocus}
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            isValid={mailRegex.test(data.userMail) && wasFocused.userMail}
            isInvalid={!mailRegex.test(data.userMail) && wasFocused.userMail}
          />
          <Form.Control.Feedback type="invalid">Ingresa un Email válido</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            required
            name="userPass"
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
            onFocus={handleFocus}
            pattern=".{8,}"
            isValid={data.userPass.length >= 8 && wasFocused.userPass}
            isInvalid={data.userPass.length < 8 && wasFocused.userPass}
          />
          <Form.Control.Feedback type="invalid">Contraseña debe tener al menos 8 caracteres</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            required
            name="userPassConfirm"
            type="password"
            placeholder="Repite contraseña"
            onChange={handleChange}
            onFocus={handleFocus}
            pattern=".{8,}"
            isValid={data.userPass === data.userPassConfirm && data.userPassConfirm.length >= 8 && wasFocused.userPassConfirm}
            isInvalid={(data.userPass !== data.userPassConfirm || data.userPassConfirm === "" || data.userPassConfirm.length < 8) && wasFocused.userPassConfirm}
          />
          <Form.Control.Feedback type="invalid">Contraseñas nos coinciden</Form.Control.Feedback>
        </Form.Group>
        <Button variant="success" type="submit">
          Registrarse
        </Button>
      </Form>
    </>
  )
};

export default Formulario;

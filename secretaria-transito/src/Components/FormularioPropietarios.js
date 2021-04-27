import React, { useState } from "react";
import styled from "@emotion/styled";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 50px 100px;
  padding: 0 50px 50 px 0;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Boton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;
  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const FormularioPropietarios = () => {
  const [datos, guardarDatos] = useState({
    identificacion: "",
    nombre: "",
    direccion: "",
    tipoPropietario: "",
  });

  const { identificacion, nombre, direccion, tipoPropietario } = datos;

  const obtenerInformacion = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const [error, guardarError] = useState(false);

  const agregarPropietario = (e) => {
    e.preventDefault();

    if (
      identificacion.trim() === "" ||
      nombre.trim() === "" ||
      direccion.trim() === "" ||
      tipoPropietario.trim() === ""
    ) {
      guardarError(true);
      return; //Para que no se siga ejecutando
    }

    guardarError(false);
  };

  return (
    <form onSubmit={agregarPropietario}>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}

      <Campo className="row">
        <Label className="col-sm-2 col-form-label">Identificacion:</Label>
        <input
          className="col-3"
          type="number"
          name="identificacion"
          value={identificacion}
          onChange={obtenerInformacion}
          required
        />
        <Label className="col-sm-2 col-form-label">Nombre:</Label>
        <input
          className="col-3"
          type="text"
          name="nombre"
          value={nombre}
          onChange={obtenerInformacion}
          required
        />
      </Campo>
      <Campo className="row">
        <Label className="col-sm-2 col-form-label">Direccion:</Label>
        <input
          className="col-3"
          type="text"
          name="direccion"
          value={direccion}
          onChange={obtenerInformacion}
          required
        />
      </Campo>

      <Campo>
        <Label>Tipo propietario:</Label>
        <InputRadio
          type="radio"
          name="tipoPropietario"
          value="persona"
          checked={tipoPropietario === "persona"}
          onChange={obtenerInformacion}
        />
        Persona
        <InputRadio
          type="radio"
          name="tipoPropietario"
          value="empresa"
          checked={tipoPropietario === "empresa"}
          onChange={obtenerInformacion}
        />
        Empresa
      </Campo>

      <Boton type="submit">Guardar informacion del Propietario</Boton>
    </form>
  );
};

export default FormularioPropietarios;

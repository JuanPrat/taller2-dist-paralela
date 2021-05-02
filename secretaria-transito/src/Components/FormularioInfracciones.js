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

const FormularioInfracciones = ({guardarInformacionInfracciones}) => {

  const [datos, guardarDatos] = useState({
    fechaInfraccion: "",
    placaDelVehiculo: "",
    identificacionPropietario: "",
    descripcionCorta:"",
    tipoAgente: "",
  });

  const {
    fechaInfraccion,
    placaDelVehiculo,
    identificacionPropietario,
    descripcionCorta,
    tipoAgente,
  } = datos;

  const obtenerInformacion = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  

  const agregarInfraccion = (e) => {
    e.preventDefault();

    guardarInformacionInfracciones(datos);
    
    //Reiniciar el from
    guardarDatos({
      fechaInfraccion: "",
    placaDelVehiculo: "",
    identificacionPropietario: "",
    descripcionCorta:"",
    tipoAgente: ""
    })
  };

  return (
    <form onSubmit={agregarInfraccion}>
      
      <Campo className="row">
        <Label className="col-sm-2 col-form-label">Fecha de infraccion:</Label>
        <input
          className="col-3"
          type="date"
          name="fechaInfraccion"
          value={fechaInfraccion}
          onChange={obtenerInformacion}
          required
        />
        <Label className="col-sm-2 col-form-label">Placa del vehiculo:</Label>
        <input
          className="col-3"
          type="text"
          name="placaDelVehiculo"
          value={placaDelVehiculo}
          onChange={obtenerInformacion}
          required
        />
      </Campo>
      <Campo className="row">
        <Label className="col-sm-2 col-form-label">Identificacion del propietario:</Label>
        <input className="col-3"
          type="text"
          name="identificacionPropietario"
          value={identificacionPropietario}
          onChange={obtenerInformacion}
          required
        />
        <Label className="col-sm-2 col-form-label">Descripcion Corta:</Label>
        <input
          className="col-3"
          type="text"
          name="descripcionCorta"
          value={descripcionCorta}
          onChange={obtenerInformacion}
          required
        />
      </Campo>

      <Campo>
        <Label>Tipo de Agente</Label>
        <InputRadio
          type="radio"
          name="tipoAgente"
          value="agenteDeTransito"
          checked={tipoAgente === "agenteDeTransito"}
          onChange={obtenerInformacion}
        />Agente de transito

        <InputRadio
          type="radio"
          name="tipoAgente"
          value="camaraDeDetecciones"
          checked={tipoAgente === "camaraDeDetecciones"}
          onChange={obtenerInformacion}
        />Camara de detecciones
      </Campo>

      <Boton type="submit">Guardar informacion de la infraccion</Boton>
    </form>
  );
};

export default FormularioInfracciones;

import React from "react";

const Infracciones = ({ infracciones }) => {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Fecha de infraccion</th>
          <th scope="col">Placa vehiculo</th>
          <th scope="col">Identificacion del propietario</th>
          <th scope="col">Descripcion corta</th>
          <th scope="col">Tipo agente</th>
        </tr>
      </thead>

      <tbody>
        {infracciones.map((infracciones) => (
          <tr>
            <th scope="row">1</th>
            <td>{infracciones.fechaInfraccion}</td>
            <td>{infracciones.placaDelVehiculo}</td>
            <td>{infracciones.identificacionPropietario}</td>
            <td>{infracciones.descripcionCorta}</td>
            <td>{infracciones.tipoAgente}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Infracciones;
import React from "react";

const Vehiculos = ({ vehiculos }) => {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Placa</th>
          <th scope="col">Marca</th>
          <th scope="col">Fecha de matricula</th>
          <th scope="col">Propietario</th>
          <th scope="col">Tipo de vehiculo</th>
        </tr>
      </thead>

      <tbody>
        {vehiculos.map((vehiculo) => (
          <tr>
            <th scope="row">1</th>
            <td>{vehiculo.placa}</td>
            <td>{vehiculo.marca}</td>
            <td>{vehiculo.fecha}</td>
            <td>{vehiculo.propietario}</td>
            <td>{vehiculo.tipoVehiculo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Vehiculos;

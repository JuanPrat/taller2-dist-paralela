import React from "react";

const Vehiculos = ({ vehiculo }) => {
  console.log(vehiculo)
  return (
    
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{vehiculo.placa}</td>
          <td>{vehiculo.marca}</td>
          <td>{vehiculo.fecha}</td>
          <td>{vehiculo.propietario}</td>
          <td>{vehiculo.tipoVehiculo}</td>
        </tr>
      </tbody>
   
  );
};

export default Vehiculos;

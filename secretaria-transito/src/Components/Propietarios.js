import React from "react";

const Propietarios = ({ propietarios }) => {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Identificacion</th>
          <th scope="col">Nombre</th>
          <th scope="col">Direccion</th>
          <th scope="col">Tipo propietario</th>
        </tr>
      </thead>

      <tbody>
        {propietarios.map((propietario) => (
          <tr>
            <th scope="row">1</th>
            <td>{propietario.identificacion}</td>
            <td>{propietario.nombre}</td>
            <td>{propietario.direccion}</td>
            <td>{propietario.tipoPropietario}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Propietarios;
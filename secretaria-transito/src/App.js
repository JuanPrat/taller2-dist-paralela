import React, { useState } from "react";
import Header from "./Components/Header";
import Vehiculos from "./Components/Vehiculos";
//import Infracciones from "./Components/Infracciones";
//import Propietarios from "./Components/Propietarios";
import FormularioVehiculos from "./Components/FormularioVehiculos";
import FormularioInfracciones from "./Components/FormularioInfracciones";
import FormularioPropietarios from "./Components/FormularioPropietarios";
import Navegacion from "./Components/Navegacion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";

//styled component

const Contenedor = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  let vehiculosIniciales = [];

  if (!vehiculosIniciales) {
    vehiculosIniciales = [];
  }
  const [vehiculos, guardarVehiculos] = useState(vehiculosIniciales);

  const guardarInformacionVehiculo = (vehiculo) => {
    guardarVehiculos([...vehiculos, vehiculo]);
  };
  return (
    <Router>
      <Contenedor>
        <Header titulo="Secretaria de Transito" />

        <Navegacion />

        <Switch>
          <Route path="/Vehiculos">
            <ContenedorFormulario>
              <FormularioVehiculos
                guardarInformacionVehiculo={guardarInformacionVehiculo}
              />
            </ContenedorFormulario>
            <ContenedorFormulario>
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
                {vehiculos.map((vehiculo) => (
                  <Vehiculos vehiculo={vehiculo} />
                ))}
              </table>
            </ContenedorFormulario>
          </Route>
          <Route path="/Infracciones">
            <ContenedorFormulario>
              <FormularioInfracciones />
            </ContenedorFormulario>
          </Route>
          <Route path="/Propietarios">
            <ContenedorFormulario>
              <FormularioPropietarios />
            </ContenedorFormulario>
          </Route>
        </Switch>
      </Contenedor>
    </Router>
  );
}

export default App;

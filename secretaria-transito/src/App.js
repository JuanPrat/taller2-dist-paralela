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

  const [ vehiculos, guardarVehiculos] = useState([]);

  const guardarInformacionVehiculo = vehiculo => {
    const arregloTemporal = vehiculos
    arregloTemporal.push(vehiculo)
    guardarVehiculos([
      arregloTemporal
    ]);
  }
  return (
    <Router>
      <Contenedor>
        <Header titulo="Secretaria de Transito" />

        <Navegacion />

        <Switch>
          <Route path="/Vehiculos">
            <ContenedorFormulario>
              <FormularioVehiculos
                guardarInformacionVehiculo = {guardarInformacionVehiculo}
              />
            </ContenedorFormulario>
            <ContenedorFormulario>
            {vehiculos.map(vehiculo => (
              <Vehiculos
                vehiculo = {vehiculo}
              />
            ))}
            </ContenedorFormulario>
          </Route>
          <Route path="/Infracciones">
            <ContenedorFormulario>
              <FormularioInfracciones/>
            </ContenedorFormulario>
          </Route>
          <Route path="/Propietarios">
            <ContenedorFormulario>
              <FormularioPropietarios/>
            </ContenedorFormulario>
          </Route>
        </Switch>
      </Contenedor>
    </Router>
  );
}

export default App;

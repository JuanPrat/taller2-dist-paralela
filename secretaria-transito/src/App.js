import React from "react";
import Header from "./Components/Header";
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
  return (
    <Router>
      <Contenedor>
        <Header titulo="Secretaria de Transito" />

        <Navegacion />

        <Switch>
          <Route path="/Vehiculos">
            <ContenedorFormulario>
              <FormularioVehiculos/>
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

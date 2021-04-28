import React, { useState } from "react";
import Header from "./Components/Header";
import Vehiculos from "./Components/Vehiculos";
import Infracciones from "./Components/Infracciones";
import Propietarios from "./Components/Propietarios";
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
  let infraccionesIniciales = [];
  let propietariosIniciales = [];

  if (!vehiculosIniciales) {
    vehiculosIniciales = [];    
  }
  if (!infraccionesIniciales){
    infraccionesIniciales = [];
  }
  if (!propietariosIniciales){
    propietariosIniciales = [];
  }

  const [vehiculos, guardarVehiculos] = useState(vehiculosIniciales);
  const [infracciones, guardarInfracciones] = useState(infraccionesIniciales);
  const [propietarios, guardarPropietarios] = useState(propietariosIniciales);

  const guardarInformacionVehiculo = (vehiculo) => {
    guardarVehiculos([...vehiculos, vehiculo]);
  };
  const guardarInformacionInfracciones = (infraccion) => {
    guardarInfracciones([...infracciones, infraccion]);
  };
  const guardarInformacionPropietarios = (propietario) => {
    guardarPropietarios([...propietarios, propietario]);
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
              <Vehiculos vehiculos={vehiculos} />
            </ContenedorFormulario>
          </Route>

          <Route path="/Infracciones">
            <ContenedorFormulario>
              <FormularioInfracciones 
               guardarInformacionInfracciones={guardarInformacionInfracciones}/>
            </ContenedorFormulario>
            
            <ContenedorFormulario>
              <Infracciones infracciones={infracciones} />
            </ContenedorFormulario>

          </Route>

          <Route path="/Propietarios">
            <ContenedorFormulario>
              <FormularioPropietarios 
                guardarInformacionPropietarios={guardarInformacionPropietarios}/>
            </ContenedorFormulario>

            <ContenedorFormulario>
              <Propietarios propietarios={propietarios} />
            </ContenedorFormulario>
          </Route>
        </Switch>
      </Contenedor>
    </Router>
  );
}

export default App;

const consultarVehiculos = () => {
    return fetch('http://localhost:3001/api/obtenerVehiculos/');
}

const consultarVehiculo = (placa) => {
    return fetch('http://localhost:3001/api/obtenerVehiculos/' + placa);
}

const guardarVehiculo = (vehiculoData_MatriculaData) => {
    const { placa, tipoVehiculo, fechaMatricula, propietario, marca } = vehiculoData_MatriculaData
    const vehiculoExiste = this.consultarVehiculo(placa);
    if (vehiculoExiste.data.lenght === 0) {
        fetch('http://localhost:3001/api/guardarVehiculo', {
            body: {
                placa: placa,
                tipoVehiculo: tipoVehiculo
            }
        }).then(response => {
            fetch('http://localhost:3001/api/guardarMatricula', {
                body: {
                    placa: placa,
                    marca: marca,
                    fechaMatricula: fechaMatricula,
                    propietario: propietario
                }
            })
        }).catch(error => window.alert('Ha ocurrido un error: '+error));
    }
    else {
        return false;
    }
}

const consultarInfracciones = () => {
    return fetch('http://localhost:3001/api/obtenerInfracciones');
}

const consultarInfraccion = (infraccion) => {
    return fetch('http://localhost:3001/api/obtenerInfraccion/' + infraccion);
}

const guardarInfraccion = (infraccion) => {
    const { fecha, tipoAgente, placa } = infraccion.body
    const infraccionExiste = this.consultarInfraccion(infraccion.req.id);
    if (infraccionExiste.data.lenght === 0) {
        return fetch('http://localhost:3001/api/guardarVehiculo', {
            body: {
                fecha: fecha,
                tipoAgente: tipoAgente,
                placa: placa
            }
        });
    }
    else {
        return false;
    }
}

const consultarPropietarios = () => {
    return fetch('http://localhost:3001/api/obtenerPropietarios')
}

const consultarPropietario = (identificacion) => {
    return fetch('http://localhost:3001/api/obtenerPropietario/' + identificacion)
}

const guardarPropietario = (propietario) => {
    const { nombre, identificacion, direccion, naturaleza } = propietario.body
    const propietarioExiste = this.consultarPropietario(identificacion);
    if (propietarioExiste.data.lenght === 0) {
        return fetch('http://localhost:3001/api/guardarPropietario', {
            body: {
                nombre: nombre,
                identificacion: identificacion,
                direccion: direccion,
                naturaleza: naturaleza
            }
        });
    }
    else {
        return false;
    }
}
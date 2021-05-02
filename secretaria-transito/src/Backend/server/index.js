const express = require('express');
const server = express();
const cors = require('cors')
const { Vehiculos, Infracciones, Propietarios, Matriculas } = require('../models/')

server.use(express.json());
server.use(cors());


//ENDPOINTS VEHICULOS
server.get("/api/obtenerVehiculos", async (req, res) => {
    let vehiculos = await Vehiculos.find()
    return res.send({ data: vehiculos })
})

server.get("/api/obtenerVehiculo/:placa", async (req, res) => {
    const { placa } = req.params;
    let vehiculo = await Vehiculos.find({ placa: { $regex: new RegExp(placa, "i") } })
    return res.send({ data: vehiculo })
})

server.post("/api/guardarVehiculo/", async (req, res) => {
    const { placa, tipoVehiculo } = req.body
    let vehiculoGuardado = await Vehiculos.create({ placa: placa, tipoVehiculo: tipoVehiculo })
    return res.send({ data: vehiculoGuardado })
})

//ENDPOINTS INFRACCIONES
server.get("/api/obtenerInfracciones", async (req, res) => {
    let infracciones = await Infracciones.find();
    return res.send({ data: infracciones })
})

server.get("/api/obtenerInfraccion/:id", async (req, res) => {
    const { id } = req.params;
    let infraccion = await Infracciones.findById(id)
        .catch(console.log)
    return res.send({ data: infraccion })
})

server.post("/api/guardarinfraccion/", async (req, res) => {
    const { fecha, tipoAgente, placa } = req.body
    let infraccionGuardada = await Vehiculos.create({
        fecha: fecha,
        tipoAgente: tipoAgente,
        placa: placa
    })
    return res.send({ data: infraccionGuardada })
})

//ENDPOINTS PROPIETARIOS
server.get("/api/obtenerPropietarios", async (req, res) => {
    let propietarios = await Propietarios.find()
    return res.send({ data: propietarios })
})

server.get("/api/obtenerPropietario/:identificacion", async (req, res) => {
    const { identificacion } = req.params;
    let propietario = await Propietarios.find({ identificacion: { $regex: new RegExp(identificacion, "i") } })
    return res.send({ data: propietario })
})

server.post("/api/guardarPropietario/", async (req, res) => {
    const { nombre, identificacion, direccion, naturaleza } = req.body
    let propietarioGuardado = await Vehiculos.create({
        nombre: nombre,
        identificacion: identificacion,
        direccion: direccion,
        naturaleza: naturaleza
    })
    return res.send({ data: propietarioGuardado })
})

//ENDPOINTS MATRICULAS
server.get("/api/obtenerMatriculas", async (req, res) => {
    let matriculas = await Matriculas.find()
    return res.send({ data: matriculas })
})

server.get("/api/obtenerMatricula/:id", async (req, res) => {
    const { id } = req.params;
    let matricula = await Matriculas.find({ id: { $regex: new RegExp(id, "i") } })
    return res.send({ data: matricula })
})

server.post("/api/guardarMatricula/", async (req, res) => {
    const { placa, marca, fechaMatricula, propietario } = req.body
    let matriculaGuardada = await Matriculas.create({
        placa: placa,
        marca: marca,
        fechaMatricula: fechaMatricula,
        propietario: propietario
    })
    return res.send({ data: matriculaGuardada })
})
module.exports = server;


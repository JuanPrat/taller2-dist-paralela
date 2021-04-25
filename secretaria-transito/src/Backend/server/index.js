const express = require('express');
const server = express();
const cors = require('cors')
const {Vehiculos, Infracciones, Propietarios} = require('../models/')

server.use(express.json());
server.use(cors());


//ENDPOINTS VEHICULOS
server.get("/api/obtenerVehiculos", async (req, res)=>{
    let vehiculos = await Vehiculos.find()
    return res.send({error: false, data:vehiculos})
})

server.get("/api/obtenerVehiculo/:placa", async (req, res)=>{
    const {placa} = req.params;
    let vehiculo = await Vehiculos.find({placa: {$regex: new RegExp(placa, "i")}})
    return res.send({error: false, data:vehiculo})
})

//ENDPOINTS INFRACCIONES
server.get("/api/obtenerInfracciones", async (req, res) => {
    let infracciones = await Infracciones.find();
    return res.send({error: false, data: infracciones})
})

server.get("/api/obtenerInfraccion/:id", async (req, res) => {
    const {id} = req.params;
    let infraccion = await Infracciones.findById(id)
    .catch(console.log)
    return res.send({error: false, data: infraccion})
})

//ENDPOINTS PROPIETARIOS
server.get("/api/obtenerPropietarios", async (req, res) => {
    let propietarios = await Propietarios.find()
    return res.send({error: false, data: propietarios})
})

server.get("/api/obtenerPropietario/:identificacion", async (req, res) => {
    const {identificacion} = req.params;
    let propietario = await Propietarios.find({identificacion: {$regex: new RegExp(identificacion, "i")}})
    return res.send({error: false, data: propietario})
})

module.exports = server;


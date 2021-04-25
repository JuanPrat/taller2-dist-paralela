const mongoose = require('mongoose')
const { Schema } = mongoose;

const VehiculosSchema = new Schema({
    placa: { type: String },
    tipoVehiculo: { type: String }
},
    { timestamps: { createdAt: true, updatedAt: true } })

module.exports = mongoose.model("vehiculos", VehiculosSchema)
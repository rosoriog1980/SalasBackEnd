const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const salaSchema = new Schema({
    imagen: {type: String, required: false},
    nombre: {type: String, required: true},
    numeroAsientos: {type: Number, required: true},
    ubicacion: {type: String, required: true},
    ultimaLimpieza: {type: Date, required: true, default: Date.now},
    ocupada: {type: Boolean, required: true, default: false}
});

module.exports = mongoose.model('Sala', salaSchema);
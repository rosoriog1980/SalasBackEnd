const status = require('http-status');
const Sala = require('./salas.model');

function respondWithResult(res, code) {
    const statusCode = code || status.OK;
    return (result) => {
        if (result) {
            return res.status(statusCode).json(result);
        }
        if (result === 0) {
            return res.status(statusCode).json(result);
        }
        return res.status(statusCode);
    };
}
  
function respondWithError(res, code) {
    const statusCode = code || status.INTERNAL_SERVER_ERROR;
    return err => res.status(statusCode).send(err);
}

function getSalas(req, res){
    Sala.find({})
    .then(respondWithResult(res))
    .catch(respondWithError(res));
}

function newSala(req, res) {
    const sala = req.body.sala;

    Sala.create(sala)
    .then(respondWithResult(res))   
    .catch(respondWithError(res));
}

function updateSala(req, res) {
    const sala = req.body.sala;
    Sala.findByIdAndUpdate(sala._id, { $set:{ imagen: sala.imagen, nombre: sala.nombre, numeroAsientos: sala.numeroAsientos,
                                        ubicacion: sala.ubicacion, ultimaLimpieza: sala.ultimaLimpieza, ocupada: sala.ocupada} },{ new: true })
	.then(respondWithResult(res))
	.catch(respondWithError(res));
}

function deleteSala(req, res) {
    Sala.findByIdAndRemove(req.query.id)
    .then(respondWithResult(res))
    .catch(respondWithError(res));
}

module.exports = {
    getSalas, newSala, updateSala, deleteSala
};
const router = require('express').Router();
const { getSalas, newSala, updateSala, deleteSala } = require('./salas.controller');

router.get('/', getSalas);
router.post('/', newSala);
router.put('/', updateSala);
router.delete('/', deleteSala);

module.exports = router; 
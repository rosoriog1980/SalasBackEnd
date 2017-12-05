const salasRouter = require('./Api/salas/routing');
const cors = require('cors');

function setRoutes(app){
    app.use(cors());
    app.use('/api/salas', salasRouter);
}

module.exports = setRoutes;
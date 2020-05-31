const express = require('express');

// importação das rotas
const NewClientController = require('./controllers/NewClientController');
const ClientsController = require('./controllers/ClientsController');

const routes = express.Router();

// rotas
routes.get('/clients', ClientsController.index);
routes.delete('/clients/:id', ClientsController.delete);
routes.post('/newclient', NewClientController.create);

module.exports = routes;
const express = require('express');
const cors = require ('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); //configura a permissão de acesso à aplicação
app.use(express.json());
app.use(routes);

app.listen(3333); //lista a porta de conexão
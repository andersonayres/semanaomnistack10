const express = require('express');
const mongoose = require('mongoose');
const routes  = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://onmistack:onmistack@cluster0-cqwio.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
});

app.use(express.json());

//methods HTTP: GET, POST, PUT, DELETE

// TIPOS DE PARAMETERS:

//Query params: re.query (Filtros, ordenação, paginação, ....)
//route params: Request.params (identificar um recurso na alteração ou remoção)
//body: request.body (Dados para criação ou alteração de um registro)

//mongoDB (Não-relacional)

app.use(routes);


app.listen(3333);
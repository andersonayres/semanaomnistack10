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

//Query params: re.query (Filtros, ordena��o, pagina��o, ....)
//route params: Request.params (identificar um recurso na altera��o ou remo��o)
//body: request.body (Dados para cria��o ou altera��o de um registro)

//mongoDB (N�o-relacional)

app.use(routes);


app.listen(3333);
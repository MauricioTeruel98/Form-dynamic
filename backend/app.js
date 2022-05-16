const express = require('express');
const bodyParser = require('body-parser');
const { service } = require('./Services/service');

const app = express();

app.use(bodyParser.json());

// Configure headers and cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

require('./routes')(app,service());

app.listen(9000, () => {
    console.log('Server running in localhost:9000');
});
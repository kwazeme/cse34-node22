const routes = require('express').Router();

routes.get('/', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.send('Bernice Gubis');
    });

    module.exports = routes;
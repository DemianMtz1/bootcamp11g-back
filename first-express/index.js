const fs = require('fs');
const express = require('express');
const server = express();

const PORT = 8080;

// middleware -> recibiremos jsons
server.use(express.json())

// RUTA KODERS HTTP PUT,POST,GET
// Practica fs + express
/*
  // GET /Koders -> reegresa un json con una lista de koders
  La lista de koders viene de un archivo
*/

server.get('/', (req, res) => {
    res.write('GET: Ruta inicial');
    res.end();
})
server.get('/koders', (req, res) => {
    
    fs.readFile('koders.json', 'utf-8', (err, data) => {
        if (err) {
            console.error('ERROR: ', err);
        }
        res.json(JSON.parse(data))
    })
})

server.post('/koders', (req, res) => {
    const cuerpo = req.body;
    console.log('Body: ', cuerpo);
    res.status(201);
    res.json({
        message: 'ok'
    })
})

server.put('/koders', (req, res) => {
    res.write('PUT: Aqui puedes sustituir un koder');

    res.end();
})

server.listen(PORT, () => {
    console.log('Server listening in port ' + PORT)
});

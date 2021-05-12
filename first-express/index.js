const fs = require('fs');
const express = require('express');
const server = express();

const PORT = 8080;

// middleware -> recibiremos jsons
server.use(express.json())

// RUTA KODERS HTTP PUT,POST,GET
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
    const newKoder = req.body;
    let allKoders = JSON.parse(fs.readFileSync('koders.json', 'utf-8'))
    allKoders.koders.push(newKoder)
    
    fs.writeFile('koders.json', JSON.stringify(allKoders) ,err => {
        if (err) {
            console.error('ERROR: ', err)
            res.status(401);
            res.end()
        }
    })
    // escribir usando fs
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

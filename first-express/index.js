const fs = require('fs');
const express = require('express');
const { json } = require('express');
const server = express();

const PORT = 8080;

// middleware -> recibiremos jsons
server.use(express.json())

// RUTA KODERS HTTP PUT,POST,GET
server.get('/', (req, res) => {
    res.write('GET: Ruta inicial');
    res.end();
})
/*
server.get('/koders', (req, res) => {
    fs.readFile('koders.json', 'utf-8', (err, data) => {
        if (err) {
            console.error('ERROR: ', err);
        }
        res.json(JSON.parse(data))
    })
})
*/
server.get('/koders', (req, res) => {
    const genderFilter = req.query.gender;
    const count = req.query.count;
    let allKoders = JSON.parse(fs.readFileSync('koders.json', 'utf-8'));

    let kodersData = null;

    if (genderFilter) {
        const kodersFilteredByGender = allKoders.koders.filter(koder => koder.gender === genderFilter);
        kodersData = kodersFilteredByGender;
    }

    let kodersCount = null;
    if (count) {
        kodersCount = []
        if (kodersData) {
            kodersData.forEach((koder, idx) => {
                if (idx < count) {
                    kodersCount.push(koder)
                }
            })
        } else {
            allKoders.forEach((koder, idx) => {
                if (idx < count) {
                    kodersCount.push(koder)
                }
            })
        }
    }
    allKoders.koders = kodersCount || kodersData || allKoders.koders;
    res.json(allKoders.koders)
})

server.post('/koders', (req, res) => {
    const newKoder = req.body;
    let allKoders = JSON.parse(fs.readFileSync('koders.json', 'utf-8'))
    allKoders.koders.push(newKoder)

    fs.writeFile('koders.json', JSON.stringify(allKoders, null, 2), err => {
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
});

server.patch('/koders/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const name = req.body.name;
    let allKoders = JSON.parse(fs.readFileSync('koders.json', 'utf-8'));

    let newKoders = allKoders.koders.reduce((koders, koder) => {
        if (id === koder.id) {
            koder.name = name;
        }
        return [
            ...koders,
            koder
        ]
    }, []);

    allKoders.koders = newKoders


    fs.writeFileSync('koders.json', JSON.stringify(allKoders, null, 2), err => {
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
});


server.delete('/koders/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const name = req.body.name;
    let allKoders = JSON.parse(fs.readFileSync('koders.json', 'utf-8'));

    //let newKoders = allKoders.koders.filter(koder => koder.id !== id)
    let newKoders = allKoders.koders.reduce((koders, koder) => {
        if (id !== koder.id) {
            koders.push(koder)
        }

        return koders
    }, []);


    allKoders.koders = newKoders


    fs.writeFileSync('koders.json', JSON.stringify(allKoders, null, 2), err => {
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
});


server.listen(PORT, () => {
    console.log('Server listening in port ' + PORT)
});

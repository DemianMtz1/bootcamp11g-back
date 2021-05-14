const express = require('express');
const router = express.Router();
const fs = require('fs');



// query params
router.get('/', (req, res) => {
    const genderFilter = req.query.gender;
    const count = req.query.count;
    const nameFilter = req.query.name;

    let allKoders = JSON.parse(fs.readFileSync('koders.json', 'utf-8'));

    let kodersData = null;

    if (genderFilter) {
        kodersData = allKoders.koders.filter(koder => koder.gender === genderFilter);
    }

    if(nameFilter){
        const dataToFilter = kodersData || allKoders.koders;
        kodersData = allKoders.koders.filter(koder => koder.name === nameFilter);
    }

    if (count) {
        const dataToFilter = kodersData || allKoders.koders;
        kodersData = dataToFilter.splice(0, count);
        
    }
    allKoders.koders = kodersData || allKoders.koders;
    res.json(allKoders.koders)
})

router.post('/', (req, res) => {
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

router.put('/', (req, res) => {
    res.write('PUT: Aqui puedes sustituir un koder');

    res.end();
});

router.patch('/:id', (req, res) => {

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


router.delete('/:id', (req, res) => {

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

module.exports = router;
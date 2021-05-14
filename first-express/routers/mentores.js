const express = require('express');
const router = express.Router();
const fs = require('fs');



// query params
router.get('/', (req, res) => {
    const moduleFilter = req.query.module;
    const count = req.query.count;
    const nameFilter = req.query.name;

    let allMentores = JSON.parse(fs.readFileSync('koders.json', 'utf-8'));

    let mentoresData = null;

    if (moduleFilter) {
        mentoresData = allMentores.mentores.filter(mentor => mentor.module === moduleFilter);
    }

    if(nameFilter){
        const dataToFilter = mentoresData || allMentores.mentores;
        mentoresData = dataToFilter.mentores.filter(mentor => mentor.name === nameFilter);
    }

    if (count) {
        const dataToFilter = mentoresData || allMentores.mentores;
        mentoresData = dataToFilter.splice(0, count);
        
    }
    allMentores.mentores = mentoresData || allMentores.mentores;
    res.json(allMentores.mentores)
})

router.post('/', (req, res) => {
    const newMentor = req.body;
    let allMentores = JSON.parse(fs.readFileSync('koders.json', 'utf-8'))
    allMentores.mentores.push(newMentor)

    fs.writeFile('koders.json', JSON.stringify(allMentores, null, 2), err => {
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
    res.write('PUT: Aqui puedes sustituir un mentor');

    res.end();
});

router.patch('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const name = req.body.name;
    let allMentores = JSON.parse(fs.readFileSync('koders.json', 'utf-8'));

    let newMentor = allMentores.mentores.reduce((mentores, mentor) => {
        if (id === mentor.id) {
            mentor.name = name;
        }
        return [
            ...mentores,
            mentor
        ]
    }, []);

    allMentores.mentores = newMentor


    fs.writeFileSync('koders.json', JSON.stringify(allMentores, null, 2), err => {
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
    let allMentores = JSON.parse(fs.readFileSync('koders.json', 'utf-8'));
    let newMentores = allMentores.mentores.reduce((mentores, mentor) => {
        if (id !== mentor.id) {
            mentores.push(mentor)
        }

        return mentores
    }, []);


    allMentores.mentores = newMentores


    fs.writeFileSync('koders.json', JSON.stringify(allMentores, null, 2), err => {
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
const router = require('express').Router();
const Koder = require('../models/koderModel');

/*Filter by gender*/
router.get('/', async (req, res) => {
    const koderGender = req.query.gender;

    let allKoders = await Koder.find({})
    let filteredKoder = koderGender ? allKoders.filter(koder=> koder.gender == koderGender): null;

    if(filteredKoder) {
        allKoders = filteredKoder;
    }

    res.json({
        error: null,
        message: 'all koders',
        data: {
            koders: allKoders
        }
    })
})

router.post('/',  async (req, res) =>{
    const newKoder = req.body;
    
    if(!newKoder.name || !newKoder.lastName || !newKoder.age || !newKoder.gender){
        return res.status(400).json({
            error: true,
            message: 'Bad request'
        })
    }

    await Koder.create(newKoder)
    console.log("Added new Koder")
    res.json({
        error: null,
        message: 'New Koder',
       
    })


})

module.exports = router;
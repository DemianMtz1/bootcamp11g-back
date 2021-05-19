const mongoose = require('mongoose');
const express = require('express');
const app = express();
const koders = require('./routers/koders')
const PORT = 8080 || process.env.PORT;

const DB_USER = 'demian1';
const DB_PASSWORD = 'ceick450';
const DB_HOST = 'kodemia-cluster.ptymh.mongodb.net';
const DB_NAME = 'kodemia';


const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('DB connected')
    })
    .catch(err => {
        console.error(err)
    })

app.use(express.json());
app.use('/koders', koders);

app.get('/', (req, res) => {
    res.json({
        error: null,
        message: 'Default root'
    })
})


app.listen(PORT, () => {
    console.log(`Listening server on port ${PORT}`)
})
const express = require('express');
const kodersRouter = require('./routers/koders');
const mentoresRouter = require('./routers/mentores');

const server = express();
const PORT = 8080;

// middleware -> recibiremos jsons
server.use(express.json());
server.use('/koders', kodersRouter);
server.use('/mentores', mentoresRouter);

server.get('/', (req, res) => {
    res.json({
        success: true,
        message: '1GG APIv1'
    });
    
});

server.listen(PORT, () => {
    console.log('Server listening in port ' + PORT)
});

const http = require('http');

const server = http.createServer((request, response)=> {
    console.log('path: ', request.url);
    console.log('method: ', request.method)
    response.write('Hola desde un servidor en node');
    response.end();
});

server.listen(8080, ()=> {
    console.log('Servidor escuchando en el puerto 8080')
})
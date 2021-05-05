const fs = require('fs');

// crear archivos

fs.writeFile('created.txt', 'Hola todos desde fs', 'utf8', err=>{
    if(err){
        console.error('No se pudo crear el archivo: ',err);
        return;
    }

    console.log('se escribio el archivo')
}) 

// Por cada funcion deberiamos tener un script ejecutable
// readFile
// appendFile
// unlink
// copyFile
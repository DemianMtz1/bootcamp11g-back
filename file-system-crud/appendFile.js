const fs = require('fs');

// appendFile
fs.appendFile('created.txt', '\nNueva linea...', (err)=>{
    if(err) { console.error('Error: ',err);return;}
    console.log('Archivo actualizado')

})
const fs = require('fs');

// copy file

fs.copyFile('created.txt', 'copyFile.txt', err=>{
    if(err){console.error('Error: ',err);return;}
    console.log('Archivo copiado')
})
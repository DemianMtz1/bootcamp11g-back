const fs = require('fs');
const rmFile = 'created.txt';
// unlink -> remove file
fs.unlink(rmFile, (err)=>{
    if(err){console.error('Error: ',err);return;}
    console.log(`Archivo ${rmFile} eliminado...`)
})
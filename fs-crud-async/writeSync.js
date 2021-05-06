const fs = require('fs');

async function createDocument(route, data) {
    await fs.promises.writeFile(route, data, 'utf8')
}

createDocument('newFile.txt', 'Nuevo documento creado usando fs')
    .then(() => console.log('Documento creado...'))
    .catch(er => console.error('Error: ', er))


    // por cada funcion deberiamos de tener un script
    
    /* 
        readFile -> yap
        appendFIle -> yap
        unlink -> yap
        copyFile -> yap
        mkdir -> yap
        rmdir <- funciona solo con carpetas vacias -> yap
        readdir ->
    */
    
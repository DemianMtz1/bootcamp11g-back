const fs = require('fs').promises;

async function readFile(path) {
    const text =  await fs.readFile(path, 'utf8');
    console.log(`*******Se abre documento ${path}*********`)
    console.log(text)
}

readFile('newFile.txt')
    .then(() => console.log('***********Cierre de documento***********'))
    .catch(err => console.error('ERROR: ', err));
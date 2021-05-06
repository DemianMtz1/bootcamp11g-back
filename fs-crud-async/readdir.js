const fs = require('fs').promises;

async function readdir(path) {
    const files = await fs.readdir(path);
    console.log(files)
}


readdir('newPath/path-crud')
    .then(() => console.log('Carpetas leidas...'))
    .catch(err => console.error('ERROR: ', err));
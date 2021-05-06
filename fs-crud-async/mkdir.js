const fs = require('fs').promises;

async function mkdir(path, recursive) {
    await fs.mkdir(path, recursive)
}
let recursiveOptions = {
    recursive: true
}

mkdir('newPath/path-crud', recursiveOptions)
    .then(() => console.log('Carpetas creadas...'))
    .catch(err => console.error('ERROR: ', err));
const fs = require('fs').promises;

async function rmdir(path, options) {
    await fs.rmdir(path, options)
}
let options = {
    recursive: true
}

rmdir('/newPath/path-crud', options)
    .then(() => console.log('Carpetas eliminadas...'))
    .catch(err => console.error('ERROR: ', err));
const fs = require('fs').promises;

async function unlink(path) {
    await fs.unlink(path)
}

unlink('newFile.txt')
    .then(() => console.log('archivo eliminado...'))
    .catch(err => console.error('ERROR: ', err));
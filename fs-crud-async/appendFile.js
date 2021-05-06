const fs = require('fs').promises;

async function appendFile(path, data) {
    await fs.appendFile(path, data, 'utf8')
}

appendFile('newFile.txt', '\n new text')
    .then(() => console.log('Texto agregado...'))
    .catch(err => console.error('ERROR: ', err));
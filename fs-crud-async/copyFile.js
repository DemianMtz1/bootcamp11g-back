const fs = require('fs').promises;

async function copyFile(src, dest) {
    await fs.copyFile(src, dest)
}

copyFile('newFile.txt', 'new-files/fileCopied.txt')
    .then(() => console.log('archivo copiado...'))
    .catch(err => console.error('ERROR: ', err));
const fs = require('fs');
// read
fs.readFile('created.txt', 'utf8', (err, data) => {
    if(err) {
        console.error('Error: ',err);
        return;
    }
    console.log(data)
})
const fs = require('fs');
const path = require('path');
const {app, ipcMain} = require('electron');

function saveComponent(event, args) {
    const jsonData = JSON.stringify(args, null, '\t');

    let destination = app.getPath('desktop');
    destination = path.join(destination, 'charsheet.json');

    fs.writeFile(destination, jsonData, 'utf8', err => {
        if (err) console.log(err);

        event.sender.send('save-complete');
    });
}

module.exports = saveComponent;
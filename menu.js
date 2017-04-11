const electron = require('electron');
const {BrowserWindow, Menu} = electron;

const template = [
    {
        label: 'View',
        submenu: [
            {
                label: 'Reload',
                accelerator: 'CmdOrCtrl+R',
                click (item, focusedWindow) {
                    if (focusedWindow) {
                        focusedWindow.reload();
                    }
                }
            },
            {
                label: 'Open Dev Tools',
                accelerator: 'CmdOrCtrl+D',
                click (item, focusedWindow) {
                    if (focusedWindow) {
                        focusedWindow.webContents.toggleDevTools();
                    }
                }
            }
        ]
    }
];

module.exports = Menu.buildFromTemplate(template);
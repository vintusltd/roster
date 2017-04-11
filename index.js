'use strict';
const path = require('path');
const url = require('url');
const appMenu = require('./menu');
const electron = require('electron');
const {app, ipcMain, BrowserWindow} = electron;

let mainWindow;
let isQuitting = false;

function createMainWindow() {
    let win = new BrowserWindow({
        title: app.getName(),
        minWidth: 800,
        minHeight: 500,
        titleBarStyle: 'hidden-inset',
        autoHideMenuBar: true,
        webPreferences: {
            webSecurity: false
        }
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.on('close', e => {
        mainWindow = null;
    });

    return win;
}

app.on('ready', () => {
    electron.Menu.setApplicationMenu(appMenu);
    console.log(electron.Menu.getApplicationMenu());

    mainWindow = createMainWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        mainWindow = createMainWindow();
    }
})
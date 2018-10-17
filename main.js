console.log('Executing Main Process');

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let window;

function createWindow() //Creates the window
{
    window = new BrowserWindow({
        width: 1280,
        height: 720,
        frame: false
    });
    window.setMenu(null);
    window.loadURL(url.format({
        pathname: path.join(__dirname, 'login.html'),
        protocol: 'file',
        slashes: true
    }));
    window.webContents.openDevTools();
    window.on('closed', () => {
        window = null;
    })
}

app.on('ready', createWindow);
"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var win;
function createWindow() {
    // Create the browser window.
    win = new electron_1.BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#ffffff',
        icon: "file://" + __dirname + "/dist/assets/logo.png"
    });
    win.loadURL("file://" + __dirname + "/dist/index.html");
    //// uncomment below to open the DevTools.
    // win.webContents.openDevTools()
    // Event when the window is closed.
    win.on('closed', function () {
        win = null;
    });
}
// Create window on electron intialization
electron_1.app.on('ready', createWindow);
// Quit when all windows are closed.
electron_1.app.on('window-all-closed', function () {
    // On macOS specific close process
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    // macOS specific close process
    if (win === null) {
        createWindow();
    }
});
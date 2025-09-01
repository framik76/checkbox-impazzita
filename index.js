const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        },
    });
    mainWindow.maximize();
    mainWindow.fullScreen = true;

    mainWindow.loadFile(path.join(__dirname, "index.html"));
});
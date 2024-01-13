import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";

if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`),
    );
  }

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
  mainWindow.setMenuBarVisibility(false);

  ipcMain.handle("min", () => {
    mainWindow.minimize();
  });
  ipcMain.handle("max", () => {
    mainWindow.maximize();
  });
  ipcMain.handle("restore", () => {
    mainWindow.unmaximize();
  });
};


app.on("ready", createWindow);

ipcMain.handle("close", () => {
  app.quit();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

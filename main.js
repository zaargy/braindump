const { app, BrowserWindow } = require('electron')

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: false,
    menuBarVisible: false,
    webPreferences: {
      nodeIntegration: true,
      devTools: true
    }
  })

  mainWindow.loadFile('index.html')
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

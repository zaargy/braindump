const { app, BrowserWindow, ipcMain } = require('electron')
const fs = require('fs')
const os = require('os');
const { SAVE_NEEDED, SAVED } = require('./types')

const formatForEmail = (date, to, subject, body) => {
  return `To: ${to}
Subject: ${subject}
MIME-Version: 1.0
Content-Type: text/html; charset=ISO-8859-1;
Date: ${date}

${body}
`
}

const enqueueMsmtp = (event, content) => {
  const date = new Date().toISOString()

  const mailFileName = `${os.homedir}/.msmtpqueue/${date}.mail`
  const msmtpFileName = `${os.homedir}/.msmtpqueue/${date}.msmtp`

  const email = formatForEmail(date, process.env.MY_EMAIL, "Journal", content)

  fs.writeFile(mailFileName, email, (err) => {
    if (err) throw err;
  })

  fs.writeFile(msmtpFileName, process.env.MY_EMAIL, (err) => {
    if (err) throw err;
  })

  event.reply(SAVED, mailFileName)
}

ipcMain.on(SAVE_NEEDED, enqueueMsmtp)

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    menuBarVisible: false,
    webPreferences: {
      nodeIntegration: true,
      devTools: true
    }
  })

  mainWindow.title = "Braindump"
  mainWindow.loadFile('index.html')
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

const { app, BrowserWindow } = require('electron')

function createWindow () {
    const win = new BrowserWindow({ 
        width: 800, 
        height: 800, 
        frame: false 
    })
win.show()
  
    win.loadFile('./public/client.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })

const { ipcRenderer } = require('electron')
const Mousetrap = require('mousetrap');
const { SAVE_NEEDED, SAVED } = require('./types')

const contentSection = document.querySelector('.content')

ipcRenderer.on(SAVED, (event, fileName) => {
  console.log("saved to " + fileName);
})

Mousetrap.bind('ctrl+shift+s', (event) => {
  const content = contentSection.innerHTML
  ipcRenderer.send(SAVE_NEEDED, content)
  contentSection.innerHTML = ""
});

// the great thing about writing your own journalling software is you can
// add completely arbitrary stuff you want 8-)
Mousetrap.bind('ctrl+shift+d', (event) => {
  const content = contentSection.innerHTML
  const datetime = new Date().toDateString()
  contentSection.innerHTML += datetime
});

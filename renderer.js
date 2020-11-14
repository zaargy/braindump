const Mousetrap = require('mousetrap');
const fs = require('fs');

Mousetrap.bind('ctrl+shift+s', (event) => {
  const content = document.querySelector('.content').textContent;

  const writer = fs.createWriteStream(app.getDataPath() + "test.txt");

  writer.write(content);

  document.querySelector('.content').textContent = "";
});

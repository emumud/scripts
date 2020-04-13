const fs = require('fs');
const path = require('path');

const scriptDir = path.resolve(__dirname, 'scripts');

function loadScripts() {
  let scripts = {};

  fs.readdirSync(scriptDir).forEach((filename) => {
    const file = path.resolve(scriptDir, filename);
    const stat = fs.statSync(file);

    if (stat && stat.isDirectory()) {
      global.fs.readdirSync(file).forEach((scriptname) => {
        const script = `${filename}.${scriptname.split('.')[0]}`;
        const filepath = path.resolve(file, scriptname);

        scripts[script] = {path: filepath, original: fs.readFileSync(filepath)};
      });
    } else {
      if (filename[0] !== '.') {
        const script = filename.split('.')[0];

        scripts[script] = {path: file, original: fs.readFileSync(file)};
      }
    }
  });

  return scripts;
}

module.exports = {
  loadScripts
};
const fs = require('fs');
const path = require('path');

const transpiler = require('transpiler');

const scriptDir = path.resolve(__dirname, 'scripts');

function loadScripts() {
  let scripts = {};

  fs.readdirSync(scriptDir).forEach((filename) => {
    const file = path.resolve(scriptDir, filename);
    const stat = fs.statSync(file);

    if (stat && stat.isDirectory()) {
      fs.readdirSync(file).forEach((scriptname) => {
        const script = `${filename}.${scriptname.split('.')[0]}`;
        const filepath = path.resolve(file, scriptname);

        const original = fs.readFileSync(filepath);

        scripts[script] = {path: filepath, original, transpiled: transpiler.transpileScript(original).transpiled};
      });
    } else {
      if (filename[0] !== '.') {
        const script = filename.split('.')[0];

        const original = fs.readFileSync(file);

        scripts[script] = {path: file, original, transpiled: transpiler.transpileScript(original).transpiled};
      }
    }
  });

  return scripts;
}

module.exports = {
  loadScripts
};
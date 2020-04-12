module.exports = {
  "plugins": [
    "emumud"
  ],

  "extends": "plugin:emumud/recommended",

  "globals": {
    "process": "off",
    "console": "off",

    "hardline": "readonly",
    "transpiler": "readonly",
    "npc": "readonly",
    "chat": "readonly",
    "main": "readonly"
  }
};

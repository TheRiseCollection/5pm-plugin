#!/usr/bin/env node

const { exec } = require("child_process");
const os = require("os");
const chalk = require("chalk");

class EditorCloser {
  constructor() {
    this.platform = os.platform();
    this.editors = {
      code: "Visual Studio Code",
      sublime_text: "Sublime Text",
      atom: "Atom",
      "notepad++": "Notepad++",
      vim: "Vim",
      nano: "Nano",
      emacs: "Emacs",
      webstorm: "WebStorm",
      pycharm: "PyCharm",
      phpstorm: "PhpStorm",
    };
  }
}

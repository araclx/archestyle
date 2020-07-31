"use strict";

module.exports = eslint;

// TODO: React.js Support
// TODO: Add Prettier Support

const eslint = {
  extends: [
    "./rules/best-practices",
    "./rules/errors",
    "./rules/es6",
    "./rules/imports",
    "./rules/node",
    "./rules/strict",
    "./rules/style",
    "./rules/variables",
    "./rules/unicorn",
    "./rules/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { sourceType: "module" },
  plugins: [
    "@typescript-eslint",
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    "unicorn",
  ],
};

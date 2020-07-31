"use strict";

module.exports = eslint;

// TODO: React.js Support

const eslint = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/node',
    './rules/strict',
    './rules/style',
    './rules/variables',
    './rules/typescript'
  ]
  parser: "@typescript-eslint/parser",
  parserOptions: { sourceType: "module" }
  plugins: [
    '@typescript-eslint'
  ]
};

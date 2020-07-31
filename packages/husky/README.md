# `@araclx/husky`

`husky` configuration adopted by ARACLX Foundation to make our releases and commuting more transparent and suitable for developers.

### Installation

```
$ yarn add @araclx/husky -D
```

```
$ npm install --save-dev @araclx/husky
```

### Usage

Create file named `.huskyrc.js` with following content.

```javascript
module.exports = require("@araclx/husky");
```

Create file named `commitlint.config.js` with following content.

```javascript
module.exports = { extends: ["@commitlint/config-conventional"] };
```

### License

MIT © [ARACLX](https://github.com/araclx)

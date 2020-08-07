# `@araclx/husky-config`

`husky` configuration adopted by ARACLX Foundation to make our releases and commuting more transparent and suitable for
developers.

### Installation

```
$ yarn add husky @araclx/husky-config -D
```

```
$ npm install --save-dev husky @araclx/husky-config
```

### Usage

Create file named `.huskyrc.js` with following content.

```javascript
module.exports = require('@araclx/husky-config')
```

Create file named `commitlint.config.js` with following content.

```javascript
module.exports = { extends: ['@commitlint/config-conventional'] }
```

Create file named `.xo-config.js` with following content.

```javascript
module.exports = require('@araclx/xo-config')
```

### License

MIT © [ARACLX](https://github.com/araclx)

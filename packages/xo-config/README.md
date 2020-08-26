# `@araclx/xo-config`

`xo` configuration adopted by ARACLX Foundation to make our releases and commuting more transparent and suitable for
developers.

### Known Bug

This package may need to instal some eslint plguins, we're working to precise this configuration.

### Installation

```
$ yarn add xo @araclx/xo-config -D
```

```
$ npm install --save-dev xo @araclx/xo-config
```

### Usage

Create file named `.xo-config.js` with following content.

```javascript
module.exports = {
	...require('@araclx/xo-config'),
	extends: [],
}
```

#### Possible Confiugrations

...

### License

MIT © [ARACLX](https://github.com/araclx)

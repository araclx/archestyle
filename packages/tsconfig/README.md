# `@araclx/tsconfig`

Before you'll ask... "For real? TSConfig should be individual for every project!" we're going to answer you - of course
it is, but it doesn't stop you to have a bare configuration suitable for your needs, you can always edit parts that you
don't want use in your project configuration but base configuration will be always same, at fact it provides less
problems with migrations to newer Node.js versions.

If you don't like multiple errors that help you keep your code healthy you can use also second `tsconfig` build by
ARACLX that are suitable for projects that are made on the fly and don't need high quality of code. -
`@araclx/tsconfig-lite`.

### Installation

```
$ yarn add @araclx/tsconfig -D
```

```
$ npm install --save-dev @araclx/tsconfig
```

### Usage

```json
{
	"extends": "@araclx/tsconfig",
	"compilerOptions": {
		"outDir": "dist",
		"target": "ES2018",
		"lib": ["ES2018"]
	}
}
```

Optionally, when you don't want to use strict type-checking.

```json
{
	"extends": "@araclx/tsconfig",
	"compilerOptions": {
		"outDir": "dist",
		"target": "ES2018",
		"lib": ["ES2018"],
		"noUnusedParameters": false,
		"noUnusedLocals": false,
		"noImplicitAny": false
	}
}
```

### License

MIT © [ARACLX](https://github.com/araclx)

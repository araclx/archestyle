# `@araclx/tsconfig`

Before you'll ask... "For real? TSConfig should be individual for every project!" we're going to answer you - of course
it is, but it doesn't stop you to have a bare configuration suitable for your needs, you can always edit parts that you
don't want use in your project configuration but base configuration will be always same, at fact it provides less
problems with migrations to newer Node.js versions.


### Installation

```
$ yarn add @araclx/tsconfig typescript -D
```

```
$ npm install --save-dev @araclx/tsconfig typescript
```

### Usage

```json
{
	"extends": "@araclx/tsconfig",
	"compilerOptions": {
		"target": "ES2018",
		"lib": ["ES2018"]
	}
}
```

Optionally, when you want to use strict type-checking.

```json
{
	"extends": "@araclx/tsconfig",
	"compilerOptions": {
		"outDir": "dist",
		"target": "ES2018",
		"lib": ["ES2018"],
		"noUnusedParameters": true,
		"noUnusedLocals": true,
		"noImplicitAny": true
	}
}
```

### License

MIT © [ARACLX](https://github.com/araclx)

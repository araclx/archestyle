# `@araclx/eslint-config`

We're don't using this package internally since [XO]() have support for TypeScript under-the-hood, but somewhere we're
using ESLint and this configuration is sued.

## Install

```
$ npm install --save-dev eslint-config-xo eslint-config-xo-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## Usage with XO

[XO has built-in support for TypeScript](https://github.com/xojs/xo#typescript), using this package under the hood, so
you do not have to configure anything.

## Standalone Usage

Add some ESLint config to your package.json (or `.eslintrc`):

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": ["xo", "xo-typescript"]
	}
}
```

Use the `space` sub-config if you want 2 space indentation instead of tabs:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": ["xo", "xo-typescript/space"]
	}
}
```

_Note:_ If your `tsconfig.json` is not in the same directory as `package.json`, you will have to set the path yourself:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": ["xo", "xo-typescript"],
		"parserOptions": {
			"project": "some-path/tsconfig.json"
		}
	}
}
```

## Related

- [eslint-config-xo](https://github.com/xojs/eslint-config-xo) - ESLint shareable config for XO
- [XO](https://github.com/xojs/xo)
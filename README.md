# Archestyle() {

**Archestyle** is general namespace in @araclx, which stands for coding standards along all products on which we're
working. Our motivation for building this project was maintaining products in same codestyle along all product/services
teams. In this repository we're holding our linters, styleguides and guidelines for programming in @araclx.

> In case you would like to try, early configuration of linters used in our company - you can clone
> [repository that we've created to bootstrap linters in new projects](https://github.com/araclx/noddy).

### Repository in progress

Writting styleguide for every speparate languague may require some time, which actually isn't possible since @ZiQiLN
don't have much time, in this case styleguides for languages will be released maybe in Q4 2020, meanwhile we're working
on building linter configurations that could be widely used.

Currently we're focusing on release of linter configuration for:

- `typescript-node`
- `typescript-react`

We're not planning to use JavaScript in our applications so writing linters for `babel`/`javascript` isn't an option.

### Contents of Repository

- `eslint` Configuration
  - `eslint-config` for monorepos and `typescript-node`/`typescript-react` applications.
  - `eslint-base` for `node`-based monorepos and `typescript-node` applications.
- `xo` Configuration
  - `xo-config` for general usage at different kinds of applications.
  - `xo-config-base` for `typescript-node` usage without support for `react`.
- `prettier-config` for general styling.
- `semantic-release` for release configuration.

# }

module.exports = {
  rules: {
    /**
     * @typescript-eslint rules
     * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
     * based on version 2.29.0
     */
    /** Require that member overloads be consecutive */
    "@typescript-eslint/adjacent-overload-signatures": "error",
    /** Requires using either T[] or Array<T> for arrays */
    "@typescript-eslint/array-type": ["error", { default: "generic" }],
    /** Disallows awaiting a value that is not a Promise */
    "@typescript-eslint/await-thenable": "error",
    /** Bans “// @ts-ignore” comments from being used */
    "@typescript-eslint/ban-ts-comment": "error",
    /** Bans specific types from being used */
    "@typescript-eslint/ban-types": "error",
    /** Enforces consistent usage of type assertions */
    "@typescript-eslint/consistent-type-assertions": "error",
    /** Consistent with type definition either interface or type */
    "@typescript-eslint/consistent-type-definitions": "error",
    /** Require explicit accessibility modifiers on class properties and methods */
    "@typescript-eslint/explicit-member-accessibility": "error",
    /** Require PascalCased class and interface names */
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "typeLike",
        format: ["PascalCase"]
      }
    ],
    /** Disallow generic Array constructors */
    "@typescript-eslint/no-array-constructor": "error",
    /** Disallow Empty Functions */
    "@typescript-eslint/no-empty-function": "error",
    /** Disallow usage of the any type */
    "@typescript-eslint/no-explicit-any": "error",
    /** Forbids the use of classes as namespaces */
    "@typescript-eslint/no-extraneous-class": "error",
    /** Requires Promise-like values to be handled appropriately */
    "@typescript-eslint/no-floating-promises": "error",
    /** Disallow iterating over an array with a for-in loop */
    "@typescript-eslint/no-for-in-array": "error",
    /** Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean */
    "@typescript-eslint/no-inferrable-types": "error",
    /** Enforce valid definition of new and constructor */
    "@typescript-eslint/no-misused-new": "error",
    /** Avoid using promises in places not designed to handle them */
    "@typescript-eslint/no-misused-promises": "error",
    /** Disallows non-null assertions using the ! postfix operator */
    "@typescript-eslint/no-non-null-assertion": "error",
    /** Disallow the use of parameter properties in class constructors */
    "@typescript-eslint/no-parameter-properties": "error",
    /** Disallows invocation of require() */
    "@typescript-eslint/no-require-imports": "error",
    /** Disallow aliasing this */
    "@typescript-eslint/no-this-alias": "error",
    /** Warns when a namespace qualifier is unnecessary */
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    /** Enforces that types will not to be used */
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    /** Warns if a type assertion does not change the type of an expression */
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    /** Disallow unused variables */
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        varsIgnorePattern: "_",
        ignoreRestSiblings: true
      }
    ],
    /** Disallow unnecessary constructors */
    "@typescript-eslint/no-useless-constructor": "error",
    /** Use for-of loops instead of standard for loops over arrays */
    "@typescript-eslint/prefer-for-of": "error",
    /** Use function types instead of interfaces with call signatures */
    "@typescript-eslint/prefer-function-type": "error",
    /** Enforce includes method over indexOf method */
    "@typescript-eslint/prefer-includes": "error",
    /** Require never-modified private members be marked as readonly */
    "@typescript-eslint/prefer-readonly": "error",
    /** Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings */
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    /** Enforce giving compare argument to Array#sort */
    "@typescript-eslint/require-array-sort-compare": "error",
    /** Disallow async functions which have no await expression */
    "@typescript-eslint/require-await": "error",
    /** When adding two variables, operands must both be of type number or of type string */
    "@typescript-eslint/restrict-plus-operands": "error",
    /** Boolean expressions are limited to booleans */
    "@typescript-eslint/strict-boolean-expressions": "error",
    /** Sets preference level for triple slash directives versus ES6-style import declarations */
    "@typescript-eslint/triple-slash-reference": "error",
    /** Enforces unbound methods are called with their expected scope */
    "@typescript-eslint/unbound-method": ["error", { ignoreStatic: true }],
    /** Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter */
    "@typescript-eslint/unified-signatures": "error",

    /**
     * react rules
     * https://github.com/yannickcr/eslint-plugin-react
     * based on version 7.19.0
     */
    /** Prevent missing displayName in a React component definition */
    "react/display-name": "error",
    /** Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children */
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "never" }
    ],
    /** Detect missing key prop */
    "react/jsx-key": "error",
    /** No .bind() or Arrow Functions in JSX Props */
    "react/jsx-no-bind": "error",
    /** Prevent comments from being inserted as text nodes */
    "react/jsx-no-comment-textnodes": "error",
    /** Prevent duplicate properties in JSX */
    "react/jsx-no-duplicate-props": "error",
    /** Prevent usage of unsafe target='_blank' */
    "react/jsx-no-target-blank": "error",
    /** Disallow undeclared variables in JSX */
    "react/jsx-no-undef": "error",
    /** Prevent React to be incorrectly marked as unused */
    "react/jsx-uses-react": "error",
    /** Prevent variables used in JSX to be incorrectly marked as unused */
    "react/jsx-uses-vars": "error",
    /** Prevent passing of children as props */
    "react/no-children-prop": "error",
    /** Prevent problem with children and props.dangerouslySetInnerHTML */
    "react/no-danger-with-children": "error",
    /** Prevent usage of deprecated methods */
    "react/no-deprecated": "error",
    /** Prevent direct mutation of this.state */
    "react/no-direct-mutation-state": "error",
    /** Prevent invalid characters from appearing in markup */
    "react/no-unescaped-entities": "error",
    /** Prevent usage of unknown DOM property */
    "react/react-in-jsx-scope": "error",
    /** Enforce ES5 or ES6 class for returning value in render function */
    "react/require-render-return": "error",

    /**
     * react hooks rules
     * https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
     * based on version 3.0.0
     */
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",

    /**
     * functional rules
     * https://github.com/jonaskello/eslint-plugin-functional
     * based on version 3.0.1
     */
    /** Prefer readonly types over mutable types */
    "functional/prefer-readonly-type": [
      "error",
      { allowLocalMutation: true, ignoreClass: true }
    ],
    /** Prefer property signatures with readonly modifiers over method signatures */
    "functional/no-method-signature": "error",

    /**
     * import rules
     * https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
     * based on version 2.20.2
     */
    /** Ensures that there is no resolvable path back to this module via its dependencies */
    "import/no-cycle": "error",
    /** Prohibit default exports. */
    "import/no-default-export": "error",
    /** Reports use of a default export as a locally named import */
    "import/no-named-default": "error",
    /** Prevent unnecessary path segments in import and require statements */
    "import/no-useless-path-segments": [
      "error",
      {
        noUselessIndex: true
      }
    ]
  }
};

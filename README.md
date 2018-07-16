# babel-node-pp
[![npm version](https://badge.fury.io/js/babel-node-pp.svg)](https://badge.fury.io/js/babel-node-pp)

An upgraded version of babel-node that uses `.babelrc`.

By default, `babel-node-pp` uses the `babel-node` exe local to the project (e.g in `/node_modules`). This may be subject to change as I work on the project.

### Usage

Same as `babel-node`, except that `preset`s and `plugin`s found in `.babelrc` will be appended to any passed via the command line.

### Todo
* Better handle complex `.babelrc`s

### Better `.babelrc` handling
* Handle `"env"` tags (nested `plugin`s)

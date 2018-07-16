# babel-node-pp
An upgraded version of babel-node that uses .babelrc instead of needing arguments passed via arguments.

### Usage

Same as `babel-node`, except that `preset`s and `plugin`s found in `.babelrc` will be appended to any passed via the command line.

### Todo
* Better handle complex `.babelrc`s
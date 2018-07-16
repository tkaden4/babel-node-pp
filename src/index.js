#!/usr/bin/env node

import { spawn } from "cross-spawn";
import { resolve } from "path";
import fs, { access } from "fs";
import minimist from "minimist";
import { inherits } from "util";

const args = minimist(process.argv.slice(2));

// TODO handle paths
const bnode_exe = "node_modules/.bin/babel-node";

try {
    fs.accessSync('.babelrc', fs.constants.F_OK | fs.constants.R_OK);
} catch (e) {
    console.error("unable to access .babelrc");
    process.exit(1);
}

let babelrc_data = JSON.parse(fs.readFileSync('.babelrc'));

// "foo,bar" -> "baz" = "foo,bar,baz"
const mergeArgumentLists = (_given, extra) => {
    const given = _given ? [_given] : [];
    return [...given, ...extra].join(',');
};

// merge given arguments with the arguments in .babelrc
const presets = mergeArgumentLists(args.presets, babelrc_data.presets);
const plugins = mergeArgumentLists(args.plugins, babelrc_data.plugins);

const long_args = [
    "--presets", presets,
    "--plugins", plugins
];

// get final args (babel-node will ignore repeated args, taking the second instance)
const final_args = [...process.argv.slice(2), ...long_args];

// Forward arguments to babel-node
let child = spawn(bnode_exe, final_args, { stdio: 'inherit' });
child.on('error', e => {
    console.error("babel-node-pp: unable to spawn child process");
});
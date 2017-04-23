'use strict';

var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });
require('es6-promise').polyfill();


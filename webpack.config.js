//@ts-check

'use strict';

const extensionConfig = require("./build/webpack.extension");
const webConfig = require("./build/webpack.web");
module.exports = [webConfig, extensionConfig];
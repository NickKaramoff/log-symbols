'use strict';
const {blue, green, red, yellow} = require('colorette');
const isUnicodeSupported = require('is-unicode-supported');

const main = {
	info: blue('ℹ'),
	success: green('✔'),
	warning: yellow('⚠'),
	error: red('✖')
};

const fallback = {
	info: blue('i'),
	success: green('√'),
	warning: yellow('‼'),
	error: red('×')
};

module.exports = isUnicodeSupported() ? main : fallback;

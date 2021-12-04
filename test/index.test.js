import pc from 'picocolors';
import isUnicodeSupported from 'is-unicode-supported';

const main = {
	info: pc.blue('ℹ'),
	success: pc.green('✔'),
	warning: pc.yellow('⚠'),
	error: pc.red('✖')
};

const fallback = {
	info: pc.blue('i'),
	success: pc.green('√'),
	warning: pc.yellow('‼'),
	error: pc.red('×')
};

const logSymbols = isUnicodeSupported() ? main : fallback;

export default logSymbols;

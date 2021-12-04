/**
> Lightweight coloured symbols for various log levels.

Includes fallbacks for Windows CMD which only supports a [limited character set](https://en.wikipedia.org/wiki/Code_page_437).

@example
```
import nanoSymbols from 'nanosymbols';

console.log(nanoSymbols.success, 'Finished successfully!');
// Terminals with Unicode support:     ✔ Finished successfully!
// Terminals without Unicode support:  √ Finished successfully!
```
*/
declare const nanoSymbols: {
  readonly info: string;
  readonly success: string;
  readonly warning: string;
  readonly error: string;
};

export default nanoSymbols;

# nanosymbols

<img src="screenshot.png" width="226" height="192" align="right">

> Lightweight coloured symbols for various log levels

Includes fallbacks for Windows CMD which only supports a
[limited character set](https://en.wikipedia.org/wiki/Code_page_437).

This is a lightweight fork of @sindresorhus'
[log-symbols](https://github.com/sindresorhus/log-symbols).
This module should act as a drop-in replacement.

Changes made:

- `chalk` dependency is replaced with `picocolors`.
- dev environment uses Prettier+ESLint, uvu, check-dts instead of XO, ava, tsd

## Install

```sh
npm install nanosymbols
```

## Usage

```js
import nanoSymbols from "nanosymbols";

console.log(nanoSymbols.success, "Finished successfully!");
// Terminals with Unicode support:     ✔ Finished successfully!
// Terminals without Unicode support:  √ Finished successfully!
```

## Related

- [log-symbols](https://github.com/sindresorhus/log-symbols) - original, more
  heavyweight version of this package
- [figures](https://github.com/sindresorhus/figures) - Unicode symbols with
  Windows CMD fallbacks
- [py-log-symbols](https://github.com/ManrajGrover/py-log-symbols) - Python port
- [log-symbols](https://github.com/palash25/log-symbols) - Ruby port
- [guumaster/logsymbols](https://github.com/guumaster/logsymbols) - Golang port

## Licence

[MIT] © 2021 Nikita Karamov

[MIT] © 2021 Sindre Sorhus

[mit]: https://spdx.org/licenses/MIT.html

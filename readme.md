# nanosymbols

<img src="screenshot.png" width="200" height="170" align="right">

> Lightweight coloured symbols for various log levels

```js
import nanoSymbols from "nanosymbols";

// if Unicode supported => ℹ, ✔, ⚠, ✖
// otherwise            => i, √, ‼, ×
console.log(
  nanoSymbols.info,
  nanoSymbols.success,
  nanoSymbols.warning,
  nanoSymbols.error,
);
```

Includes fallbacks for Windows CMD which only supports a
[limited character set](https://en.wikipedia.org/wiki/Code_page_437).

Use this (instead of the original
[`log-symbols`](https://github.com/sindresorhus/log-symbols)
by [Sindre Sorhus](https://github.com/sindresorhus)), if:

- you care for smaller install size (~~50 kB~~ 12 kB)
- you only use `picocolors`-based dev tools (PostCSS, Stylelint, SVGO, ...)
  - or you don't have any terminal colouring libraries at all
- you want a faster, lighter, and more pleasant dev experience
  (~~220 MB~~ 114 MB in `node_modules`, takes ~~22 sec~~ 8 sec to install)

## Install

```sh
npm install nanosymbols
```

## Related

- [log-symbols](https://github.com/sindresorhus/log-symbols) - original version
  of this package
- [figures](https://github.com/sindresorhus/figures) - Unicode symbols with
  Windows CMD fallbacks
- [py-log-symbols](https://github.com/ManrajGrover/py-log-symbols) - Python port
- [log-symbols](https://github.com/palash25/log-symbols) - Ruby port
- [guumaster/logsymbols](https://github.com/guumaster/logsymbols) - Golang port

## Licence

[MIT] © 2021 Nikita Karamov

[MIT] © 2021 Sindre Sorhus

[mit]: https://spdx.org/licenses/MIT.html

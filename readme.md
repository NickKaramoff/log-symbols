# log-symbols

<img src="screenshot.png" width="226" height="192" align="right">

> Chalk-free colored symbols for various log levels

Includes fallbacks for Windows CMD which only supports a [limited character set](https://en.wikipedia.org/wiki/Code_page_437).

> ## HEADS UP!
>
> This is a fork of sindresorhus' [log-symbols](https://github.com/sindresorhus/log-symbols). This should act as a drop-in replacement for this module. The only change is that the `chalk` dependency is replaced with `picocolors`.

## Install

```
$ npm install @nickkaramoff/log-symbols
```

## Usage

```js
import logSymbols from "@nickkaramoff/log-symbols";

console.log(logSymbols.success, "Finished successfully!");
// Terminals with Unicode support:     ✔ Finished successfully!
// Terminals without Unicode support:  √ Finished successfully!
```

## API

### logSymbols

#### info

#### success

#### warning

#### error

## Related

- [figures](https://github.com/sindresorhus/figures) - Unicode symbols with Windows CMD fallbacks
- [py-log-symbols](https://github.com/ManrajGrover/py-log-symbols) - Python port
- [log-symbols](https://github.com/palash25/log-symbols) - Ruby port
- [guumaster/logsymbols](https://github.com/guumaster/logsymbols) - Golang port

## Licence

[MIT] © 2021 Nikita Karamov

[MIT] © 2021 Sindre Sorhus

[mit]: https://spdx.org/licenses/MIT.html

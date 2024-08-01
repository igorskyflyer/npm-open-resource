<h1 align="center">Open Resource</h1>

<br>

<div align="center">
  📂 Opens a given resource (URL, file, etc.) via the default OS handler. 🔎
</div>

<br>
<br>

<div align="center">
  <blockquote>
    <br>
    <h4>💖 Support further development</h4>
    <span>I work hard for every project, including this one
    <br>
    and your support means a lot to me!
    <br>
    <br>
    Consider buying me a coffee. ☕
    <br>
    <strong>Thank you for supporting my efforts! 🙏😊</strong></span>
    <br>
    <br>
    <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
    <br>
    <br>
    <a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
    <br>
    <br>
    <br>
  </blockquote>
</div>

<br>
<br>

## 📃 Table of contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
- [IOptions](#ioptions)
  - [openSync()](#opensyncresource-string-options-ioptions-void)
  - [open()](#openresource-string-options-ioptions-promisevoid)
- [Examples](#-examples)
- [Changelog](#-changelog)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 💻 cross-platform for major OS (Windows, Linux, MacOS) using:
  - [`start`](https://ss64.com/nt/start.html)/[`Start-Process`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/start-process) for Windows
  - [`xdg-open`](https://gitlab.freedesktop.org/xdg/xdg-utils/-/blob/master/scripts/xdg-open.in) for Linux (either native or bundled)
  - [`open`](https://ss64.com/mac/open.html) for MacOS  
- ⏳ both sync and async methods  
- 📃 supports passing of arguments

---

## 🕵🏼 Usage

Install it by executing:

```shell
npm i '@igor.dvlpr/open-resource'
```

---

## 🤹🏼 API

An options object can be passed to the `open()` functions, it being described by the interface `IOptions` as follows:

### `IOptions`

```ts
interface IOptions {
  args?: string[]
  msShell?: 'cmd' | 'powershell'
}
```

`args` - The arguments to pass to the command.  

`msShell` - The shell to use for the command execution. Only available on Windows.

---

### `openSync(resource: string, options?: IOptions): void`

*Opens a specified resource synchronously using the appropriate command for the current platform.*

`resource` - The resource to be opened, a path, URL, etc. Must be a non-empty string.  

`options` - Optional configuration for the command execution.

<br>

Throws an error if no resource is specified, if the arguments are invalid, or an error occurs during execution.

---

### `open(resource: string, options?: IOptions): Promise<void>`

*Opens a specified resource asynchronously using the appropriate command for the current platform.*

`resource` - The resource to be opened, a path, URL, etc. Must be a non-empty string.  

`options` - Optional configuration for the command execution.

<br>

Throws an error if no resource is specified, if the arguments are invalid, or an error occurs during execution.

---

## ✨ Examples

`example.mts`
```ts
import {  } from '@igor.dvlpr/open-resource'

```

---

## 📝 Changelog

📑 The changelog is available here: [CHANGELOG.md](https://github.com/igorskyflyer/npm-open-resource/blob/main/CHANGELOG.md).

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-open-resource/blob/main/LICENSE).

---

## 🧬 Related

[]()

> __

[]()

> __

[]()

> __

[]()

> __

[]()

> __

---

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).

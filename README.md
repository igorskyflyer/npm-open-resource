<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-open-resource/main/media/open-resource.png" alt="Icon of Open Resource" width="256" height="256">
<h1 align="center">Open Resource</h1>
</div>

<br>

<div align="center">
  📂 Opens a given resource (URL, file, etc.) via the default OS handler. 🔎
</div>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 📂 Opens any file, folder, or URL with the default app on your system
- ⚡ Works instantly in sync mode for quick, blocking execution
- ⏳ Runs in async mode so your app can keep going while it opens things
- 🖥 Adapts automatically to Windows, macOS, Linux, and Android
- 🛠 Lets you pass extra arguments to fine‑tune how the resource opens
- 🚫 Gives clear errors if the resource is missing or the platform isn’t supported

<br>

> ℹ️ Uses:
> - [`start`](https://ss64.com/nt/start.html)/[`Start-Process`](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/start-process) for **Windows**
> - [`xdg-open`](https://gitlab.freedesktop.org/xdg/xdg-utils/-/blob/master/scripts/xdg-open.in) for **Linux** (either native or bundled) and **Android** (alias of [`termux-open`](https://github.com/termux/termux-tools/blob/master/scripts/termux-open.in))
> - [`open`](https://ss64.com/mac/open.html) for **macOS**  
>

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/open-resource
```

```bash
yarn add @igorskyflyer/open-resource
```

```bash
npm i @igorskyflyer/open-resource
```

<br>
<br>

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

*Opens a specified resource **synchronously** using the appropriate command for the current platform.*

`resource` - The resource to be opened, a path, URL, etc. Must be a non-empty string.  

`options` - Optional configuration for the command execution.

<br>

Throws an error if no resource is specified, if the arguments are invalid, or an error occurs during execution.

---

### `open(resource: string, options?: IOptions): Promise<void>`

*Opens a specified resource **asynchronously** using the appropriate command for the current platform.*

`resource` - The resource to be opened, a path, URL, etc. Must be a non-empty string.  

`options` - Optional configuration for the command execution.

<br>

Throws an error if no resource is specified, if the arguments are invalid, or an error occurs during execution.

---

## ✨ Examples

`example.mts`
```ts
import { openSync } from '@igorskyflyer/open-resource'

openSync('https://igorskyflyer.me') // will open the default browser and navigate to the site

openSync('D:\\Data\\file.txt') // will open the text file in the default text viewer/editor
```

<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-open-resource/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-open-resource/blob/main/LICENSE.txt).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/registry-apppaths](https://www.npmjs.com/package/@igorskyflyer/registry-apppaths)

> _🪀 A Node.js module for reading the AppPaths registry key on Windows. Useful for retrieving applications that can be launched from the command prompt. 🗃_

<br>

[@igorskyflyer/regkeys](https://www.npmjs.com/package/@igorskyflyer/regkeys)

> _📚 An npm package for fetching Windows registry keys. 🗝_

<br>

[@igorskyflyer/upath](https://www.npmjs.com/package/@igorskyflyer/upath)

> _🎍 Provides a universal way of formatting file-paths in Unix-like and Windows operating systems as an alternative to the built-in path.normalize(). 🧬_

<br>

[@igorskyflyer/windows-packages](https://www.npmjs.com/package/@igorskyflyer/windows-packages)

> _💻 A Node.js module for reading the Packages registry key on Windows 10+. Useful for retrieving Windows 10+ installed Store applications. 📦_

<br>

[@igorskyflyer/scrollend-polyfill](https://www.npmjs.com/package/@igorskyflyer/scrollend-polyfill)

> _🛴 A performant and light (< 1.5KB) JavaScript polyfill for the scrollend Event. ⛸️_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).

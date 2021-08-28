# Octohint

[![chrome web store](https://img.shields.io/chrome-web-store/v/hbkpjkfdheainjkkebeoofkpgddnnbpk.svg)](https://chrome.google.com/webstore/detail/hbkpjkfdheainjkkebeoofkpgddnnbpk)
[![users](https://img.shields.io/chrome-web-store/d/hbkpjkfdheainjkkebeoofkpgddnnbpk.svg)](https://chrome.google.com/webstore/detail/hbkpjkfdheainjkkebeoofkpgddnnbpk)
[![rating](https://img.shields.io/chrome-web-store/stars/hbkpjkfdheainjkkebeoofkpgddnnbpk.svg)](https://chrome.google.com/webstore/detail/hbkpjkfdheainjkkebeoofkpgddnnbpk)

<img src="assets/demo.gif" alt="Demo" width="636" />

## Introduction

Octohint is a browser extension which adds IntelliSense hint to GitHub and GitLab.

[Introduction at Medium](https://medium.com/@pd4d10/introducing-octohint-e1a3e4b80c47)

## Installation

### Chrome

Install it from [Chrome Web Store](https://chrome.google.com/webstore/detail/octohint/hbkpjkfdheainjkkebeoofkpgddnnbpk)

### Safari

Install it from [Safari Extensions Gallery](https://safari-extensions.apple.com/details/?id=com.pd4d10.octohint-2FFP8Y4P2A)

### Firefox

Currently you could build it from source, see web extension section of [contributing docs](CONTRIBUTING.md). Or [try this one](https://github.com/pd4d10/octohint/issues/24#issuecomment-450467200).
You can use the "On your own" signing option on [Mozilla addon site](https://addons.mozilla.org/en-US/developers/addon/submit/distribution) to create a signed add-on for your self, and install it.
Alternatively, you can follow [this guide](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Temporary_Installation_in_Firefox) to install it temporarly from local directory, note that add-on installed this way is temporary add-on, and will be removed every time you restart the Firefox.

Make sure your version of Firefox supports web extensions.

### Opera

Use this extension: [Install Chrome Extensions](https://addons.opera.com/en/extensions/details/download-chrome-extension-9/) to install Octohint from Chrome Web Store

## Features

With Octohint installed, when you view code at GitHub (For example [this demo](https://github.com/pd4d10/octohint/blob/master/assets/demo.ts)), you'll get features as follows:

- Mouse Hover: Show information of current token
- Left Click: Show all references of current token
- [⌘] + Click: Go to definition of current token (For Windows and Linux user, use [Ctrl] instead)

## Supported languages

Octohint supports all languages. There are two strategies:

- IntelliSense hint: TypeScript, JavaScript, CSS, LESS, SCSS
- Simple token matching: All other languages

It is because browser only runs JavaScript. But with help of WebAssembly, maybe we could bring other languages' IntelliSense analysis to browser! It's still in research

## Supported platforms

Support GitHub and GitLab. Since GitLab CE has many versions, I'm not sure it works correctly on every version. If you find some bugs you could [submit an issue](https://github.com/pd4d10/octohint/issues/new).

Bitbucket's code viewer UI has changed greatly, so there is still lots of work to do.

## Get your private site works

If you're self-hosting GitHub/GitLab/Bitbucket (Enterprise, Community, etc), visit your site, right-click on Octohint's icon in the toolbar and select **Enable Octohint on this domain.**

## Privacy policy

Octohint is a pure client thing. All code analysis are performed at your browser, which means your code and actions log like click, mousemove will never be sent to any server.

Feel free to use it at your private GitHub/GitLab/Bitbucket.

## Related tools

- [Octoview](https://github.com/pd4d10/octoview): The missing preview feature for GitHub

## License

MIT

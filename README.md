# vscode-makefile-term 

This extension allows you to run a `Makefile` target from within the
editor by clicking right above the target name. It will execute
the following command in the terminal

```bash
cd ${makefileDir}; make ${target}
```
* `makefileDir` - the directory of the Makefile that is being edited
* `target`  - the text found using the following logic: 
  * `/(^[a-zA-Z]+:)/` - any line starting with an alphabetic string followed by a colon

## Features

![screenshot](https://raw.githubusercontent.com/lfmunoz/vscode-makefile-term/main/media/screenshot.png)


## Requirements

* Tested on vscode 1.65.0

## Extension Settings

See `package.json` for available settings. 

* vscode-makefile-term.enabled

## Known Issues

* Can increase performance with a cache
* Can make extension more adaptable by allowing changing configurable:
  * command that is execute
  * text that is displayed above target

## Release Notes


### 0.0.1 - beta relase

* initial working simple functionality


-----------------------------------------------------------------------------------------------------------

# Contributing

Feedback and pull requests are welcomed

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)


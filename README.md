# vscode-makefile-term 

This extension allows you to run a `Makefile` TARGET from within the
editor by clicking above the TARGET. It will execute the following command in the terminal

```bash
cd ${makefileDir}; make -f ${filename} ${target}
```

* `makefileDir` - the directory of the Makefile that is being edited
* `filename` - file where you clicked the TARGET
* `target`  - the text found using the following logic: 
  *  any line starting with an alphabetic string followed by a colon and not including `=`

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

### 0.0.1

* initial working functionality

### 0.0.2

* target with `=` are ignored
* make uses -f to specify filename

### 0.0.3

-----------------------------------------------------------------------------------------------------------

# Contributing

Feedback and pull requests feature requests are welcomed. 

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating extensions.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)


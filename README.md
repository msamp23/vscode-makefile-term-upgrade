# vscode-makefile-term 

This extension allows you to run a `Makefile` `target` from within the
editor by clicking above the `target`. It will execute the following command in the terminal:

```bash
cd ${makefileDir}; make -f ${filename} ${target}
```

* `makefileDir` - the directory of the Makefile that is being edited
* `filename` - file where you clicked the TARGET
* `target`  - the text found using the following logic: 
  *  any line starting with an alphabeticnumeric string followed by a colon and not including `=`

## Features

![screenshot](https://raw.githubusercontent.com/lfmunoz/vscode-makefile-term/main/media/screenshot.png)


## Requirements

* Tested on vscode 1.72.2

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

* minor text corrections

### 0.0.4

* added keybidining to run again (Ctrl+Shift+x by default)
* ignore lines with `=` as cannot be target

### 0.1.0

* Bumping version, extension is getting stable
* Support for makefile in directory with spaces in path
* Updated code formatting

-----------------------------------------------------------------------------------------------------------

# Contributing

Feedback and pull requests are welcomed. 

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating extensions.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)


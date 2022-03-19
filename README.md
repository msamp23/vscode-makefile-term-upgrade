# vscode-makefile-term 

This extension allows you to run a `Makefile` `target` from within the
editor by clicking above the `target`. It will execute the following command in the terminal:

```bash
# note this is configurable
cd %makefileDir% make -f %file% %target%
```

* `%makefileDir%` - the directory of the Makefile that is being edited
* `%file%` - file where you clicked the TARGET
* `%target%`  - the text found using the following logic: 
  *  any line starting with an alphabeticnumeric string followed by a colon and not including `=`

Only the following place holders are available: `%target%`, `%makefileDir%`, `%file%`.  There is also a keybinding to run the previously clicked target again (default `Ctrl+Shift+x`)

## Features

![screenshot](https://raw.githubusercontent.com/lfmunoz/vscode-makefile-term/main/media/screenshot.png)


## Extension Settings

See `package.json` for full available settings. 

* "vscode-makefile-term.enabled": true
* "vscode-makefile-term.textTemplate": " ▶ make %target% "
* "vscode-makefile-term.cmdTemplate": "cd %makefileDir%; make -f %file% %target%"

## Requirements

* Tested on vscode 1.65.0


## Known Issues

* Can increase performance with a cache (not a problem so far)
* The command template and the text template that is user defined use `replace` and not `replaceAll`. This means each variable can be replaced 1 or 0 times.

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
* removed pop-up to indicate extension is activated

### 0.0.5

* support for a user defined commands to run when clicking on target
* support for user defiend text that is displayed above target


-----------------------------------------------------------------------------------------------------------

# Contributing

Feedback and pull requests are welcomed. 

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating extensions.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)


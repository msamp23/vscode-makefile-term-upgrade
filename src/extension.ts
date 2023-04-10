// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import { MakefileProvider } from './MakefileProvider';
import { EXT_NAME, Config } from './Config';


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    const codelensProvider = new MakefileProvider();

    console.log(`[${EXT_NAME}] - extension ACTIVATED!`);
   
    // https://code.visualstudio.com/docs/languages/identifiers
    context.subscriptions.push(
        vscode.languages.registerCodeLensProvider({ language: 'makefile' }, codelensProvider)
    );

    context.subscriptions.push(vscode.commands.registerCommand(`${EXT_NAME}.enableCodeLens`, () => {
        vscode.workspace.getConfiguration(EXT_NAME).update("enabled", true, true);
    }));

    context.subscriptions.push(vscode.commands.registerCommand(`${EXT_NAME}.disableCodeLens`, () => {
        vscode.workspace.getConfiguration(EXT_NAME).update("enabled", false, true);
    }));

    context.subscriptions.push(vscode.commands.registerCommand(`${EXT_NAME}.runAgain`, () => {
        let term = vscode.window.activeTerminal;
        if (term === undefined) {
            term = vscode.window.createTerminal();
        }
        term.show();
        if (Config.runAgain !== "") { term.sendText(Config.runAgain); }
    }));

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    context.subscriptions.push(vscode.commands.registerCommand(`${EXT_NAME}.make`, (target: string, filename: string) => {
        console.log(`[${EXT_NAME}] - action - target=${target} filename=${filename}!`);
        const makefileDir = path.dirname(filename);
        const file = path.basename(filename);
        let term = vscode.window.activeTerminal;
        if (term === undefined) {
            term = vscode.window.createTerminal();
        }
        term.show();
        Config.runAgain = `cd "${makefileDir}" && make -f ${file} ${target}`;
        term.sendText(Config.runAgain);
    }));
    Config.testFun();
}

// this method is called when your extension is deactivated
export function deactivate() {
    console.log(`[${EXT_NAME}] - extension - DEACTIVATED!`);
}

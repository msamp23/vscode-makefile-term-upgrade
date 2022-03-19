import * as path from 'path';
import { commands } from 'vscode';

// ________________________________________________________________________________
// Constants
// ________________________________________________________________________________
export const EXT_NAME = "vscode-makefile-term";
export const DEFAULT_TEXT = ' ▶ make %target%';
export const DEFAULT_CMD = 'cd %makefileDir%; make -f %file% %target%';
export const DEFUALT_TOOLTIP = 'runs target in terminal';
// ________________________________________________________________________________
// Config class
// ________________________________________________________________________________
export class Config {
    // PUBLIC
    public static runAgain: string =  '';
    // PRIVATE
    private static _instance: Config;
    private static textTemplate: string =  DEFAULT_TEXT;
    private static cmdTemplate: string =  DEFAULT_CMD;

    // ________________________________________________________________________________
    // PRIVATE
    // ________________________________________________________________________________
    private constructor() { }

    // ________________________________________________________________________________
    // PUBLIC
    // ________________________________________________________________________________
    // eslint-disable-next-line @typescript-eslint/naming-convention
    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    public static resetToDefault() {
        this.textTemplate = DEFAULT_TEXT;
        this.cmdTemplate = DEFAULT_CMD;
    }

    // no error check, user must know what they are doing
    public static setTextTemplate(text: string) {
        this.textTemplate = text;
    }

    // no error check, user must know what they are doing
    public static setCmdTemplate(text: string) {
        this.cmdTemplate = text;
    }

    public static replaceTextTemplate(filename: string, target: string) : string {
        const makefileDir = path.dirname(filename);
        const file = path.basename(filename);
        let res = this.textTemplate;
        res = res.replace('%makefileDir%', makefileDir);
        res = res.replace('%file%', file);
        res = res.replace('%target%', target);
        return res;
    }

    public static replaceCmdTemplate(filename: string, target: string) : string {
        const makefileDir = path.dirname(filename);
        const file = path.basename(filename);
        let res = this.cmdTemplate;
        res = res.replace('%makefileDir%', makefileDir);
        res = res.replace('%file%', file);
        res = res.replace('%target%', target);
        return res;
    }
} // end of Config


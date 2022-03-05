
class Config {
    private static _instance: Config;

    private constructor() { }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    public static get Instance() {
        return this._instance || (this._instance = new this());
    }
}


export const configInstance = Config.Instance;

export const EXT_NAME = "vscode-makefile-term";
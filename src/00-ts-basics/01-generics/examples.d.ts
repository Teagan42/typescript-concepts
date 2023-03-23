export declare const getName: <Name extends string>() => string;
export type setConfiguration = (config: Record<string, string>) => void;
export declare class Example<SetConfig extends setConfiguration> {
    private readonly setConfig;
    constructor(setConfig: SetConfig);
}

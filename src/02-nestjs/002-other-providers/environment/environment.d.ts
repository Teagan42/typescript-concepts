export declare abstract class Environment {
    private readonly enableLogging;
    private readonly logger;
    protected constructor(loggerContext: string, enableLogging?: boolean);
    log(message: any, ...params: any[]): void;
}

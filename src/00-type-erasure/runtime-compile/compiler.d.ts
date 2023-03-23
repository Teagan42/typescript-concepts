import * as ts from "typescript";
export declare function reportDiagnostics(diagnostics: ts.Diagnostic[]): void;
export declare function readConfigFile(configFileName: string): ts.ParsedCommandLine;
export declare function compile(configFileName: string): void;

import * as ts from "typescript";
import * as fs from "fs";
import * as path from "path";

export function reportDiagnostics(diagnostics: ts.Diagnostic[]): void {
  diagnostics.forEach(diagnostic => {
    let message = "Error";
    if (diagnostic.file) {
      let { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
      message += ` ${diagnostic.file.fileName} (${line + 1},${character + 1})`;
    }
    message += ": " + ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
    console.log(message);
  });
}

export function readConfigFile(configFileName: string) {
  // Read config file
  const configFileText = fs.readFileSync(configFileName).toString();

  // Parse JSON, after removing comments. Just fancier JSON.parse
  const result = ts.parseConfigFileTextToJson(configFileName, configFileText);
  const configObject = result.config;
  if (!configObject) {
    reportDiagnostics([result.error]);
    process.exit(1);;
  }

  // Extract config infromation
  const configParseResult = ts.parseJsonConfigFileContent(configObject, ts.sys, path.dirname(configFileName));
  if (configParseResult.errors.length > 0) {
    reportDiagnostics(configParseResult.errors);
    process.exit(1);
  }
  return configParseResult;
}


export function compile(configFileName: string): void {
  // Extract configuration from config file
  let config = readConfigFile(configFileName);

  // Compile
  let program = ts.createProgram(config.fileNames, config.options);
  let emitResult = program.emit();

  // Report errors
  reportDiagnostics(ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics));
}
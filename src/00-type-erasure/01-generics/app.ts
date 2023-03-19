export const getName = <Name extends string>(): string => {
  return "" as Name;
};

export type setConfiguration = (config: Record<string, string>) => void;

export class App<SetConfig extends setConfiguration> {
  constructor(private readonly setConfig: SetConfig) {
  }
}
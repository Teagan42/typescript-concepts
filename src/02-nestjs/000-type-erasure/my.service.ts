import {ValueProvider} from '@nestjs/common';

export class MyService<ImportantValue extends string> {
  importantValue: ImportantValue;
  constructor() {
  }
}

export type AppName = 'MyFirstApp';
export const AppName: AppName = 'MyFirstApp';

export class MyServiceImplementation extends MyService<AppName> {
  importantValue: AppName = AppName;

  constructor() {
    super();
  }
}




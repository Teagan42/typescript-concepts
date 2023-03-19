import {ValueProvider} from '@nestjs/common';

export class MyService<ImportantValue extends string> {
  importantValue: ImportantValue;
  constructor() {
  }
}

export type MyFirstAppName = 'MyFirstApp';
export type MySecondAppName = 'MySecondApp';

export class MyService1 extends MyService<MyFirstAppName>{
  importantValue: MyFirstAppName = 'MyFirstApp';
  constructor() {
    super();
  }
}

export class MyService2 extends MyService<MySecondAppName> {
  importantValue: MySecondAppName = 'MySecondApp';

  constructor() {
    super();
  }
}




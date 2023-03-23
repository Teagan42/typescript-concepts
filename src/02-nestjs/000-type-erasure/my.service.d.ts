export declare class MyService<ImportantValue extends string> {
    importantValue: ImportantValue;
    constructor();
}
export type MyFirstAppName = 'MyFirstApp';
export declare class MyService1 extends MyService<MyFirstAppName> {
    importantValue: MyFirstAppName;
    constructor();
}
export type MySecondAppName = 'MySecondApp';
export declare class MyService2 extends MyService<MySecondAppName> {
    importantValue: MySecondAppName;
    constructor();
}

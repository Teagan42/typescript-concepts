# NestJS and Type Erasure

## my.service.ts

* A service class with an important value that has the generic type argument.
* Two services that extend the generic class and explicitly specify the value for the generic argument.

## Let's Use NestJS to Inject These

**Yes the file names give it away**

You may be tempted use const variables to have your NestJS module provide non-generic services.

```typescript
const service1 = MyService<MyFirstAppName>;
const service2 = MyService<MySecondAppName>;

@Module({
  providers: [
    service1,
    service2
  ]
})
export class AppModuleInvalid {}
```

What do you see when you run:
`nest build && node src/02-nestjs/000-type-erasure/app.module.invalid`

Do you see the `important values`? Why Not?

To inject these properly, you must extend the generic service, providing the 
generic argument type:

```typescript
export class MyService1 extends MyService<MyFirstAppName>{
  importantValue: MyFirstAppName = 'MyFirstApp';
  constructor() {
    super();
  }
```

Now run:
`nest build && node src/02-nestjs/000-type-erasure/app.module.valid`


import { Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {
  MyFirstAppName,
  MySecondAppName, MyService,
} from './my.service';

const service1 = MyService<MyFirstAppName>;
const service2 = MyService<MySecondAppName>;

@Module({
  providers: [
    service1,
    service2
  ]
})
export class AppModuleInvalid {}

const bootstrap = async () => {
  console.log('Bootstrap');
  const app = await NestFactory.create(AppModuleInvalid);
  const service1 = app.get(MyService<MyFirstAppName>);
  console.log(`MyService1 Important Value ${service1.importantValue}`);
  const service2 = app.get(MyService<MySecondAppName>);
  console.log(`MyService2 Important Value ${service2.importantValue}`);
  await app.listen(3000);
}

bootstrap();

import { Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {
  MyFirstAppName,
  MySecondAppName, MyService,
} from './my.service';

@Module({
  providers: [
      MyService<MyFirstAppName>,
      MyService<MySecondAppName>
  ]
})
export class AppModuleInvalid {}

const bootstrap = async () => {
  const app = await NestFactory.create(AppModuleInvalid);
  const service = app.get(MyService);
  console.log(`Base Important Value ${service.importantValue}`);
  const service1 = app.get(MyService<MyFirstAppName>);
  console.log(`MyService1 Important Value ${service1.importantValue}`);
  const service2 = app.get(MyService<MySecondAppName>);
  console.log(`MyService2 Important Value ${service2.importantValue}`);
  await app.listen(3000);
}

bootstrap();

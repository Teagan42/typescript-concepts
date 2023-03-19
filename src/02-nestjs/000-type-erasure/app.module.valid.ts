import { Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {MyService1, MyService2} from './my.service';

@Module({
  providers: [
      MyService2,
      MyService1
  ]
})
export class AppModule {}

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const service1 = app.get(MyService1);
  const service2 = app.get(MyService2);
  console.log(`Service1 Important Value ${service1.importantValue}`);
  console.log(`Service2 Important Value ${service2.importantValue}`);
  await app.listen(3000);
}

bootstrap();

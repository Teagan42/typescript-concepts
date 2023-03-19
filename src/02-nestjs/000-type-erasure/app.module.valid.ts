import { Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {MyServiceImplementation} from './my.service';

@Module({
  providers: [
      MyServiceImplementation,
  ]
})
export class AppModule {}

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const service = app.get(MyServiceImplementation);
  console.log(`Important Value ${service.importantValue}`);
  await app.listen(3000);
}

bootstrap();

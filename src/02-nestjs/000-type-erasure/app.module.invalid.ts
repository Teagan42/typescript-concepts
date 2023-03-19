import { Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {MyService} from './my.service';

@Module({
  providers: [
      MyService,
  ]
})
export class AppModuleInvalid {}

const bootstrap = async () => {
  const app = await NestFactory.create(AppModuleInvalid);
  const service = app.get(MyService);
  console.log(`Important Value ${service.importantValue}`);
  await app.listen(3000);
}

bootstrap();

import { Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {AppNameProvider} from './app-name.provider';

@Module({
  providers: [
      AppNameProvider,
  ]
})
export class AppModule {}

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();

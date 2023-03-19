import { Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {AppNameProvider} from './app-name.provider';

export type AppName = 'MyFirstApp';

export const AppName: AppName = 'MyFirstApp';

@Module({
  providers: [
      AppName,
  ]
})
export class AppModule {}

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();

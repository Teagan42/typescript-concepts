import { Module } from "@nestjs/common";
import { PostModule } from "./user";
import { UserModule } from "./user/user.module";
import { AppController } from "./app.controller";
import { NestFactory } from "@nestjs/core";

@Module({
  imports: [
    PostModule,
    UserModule
  ],
  controllers: [AppController]
})
export class AppModule {}

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();

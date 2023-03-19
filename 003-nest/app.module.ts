import { Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { PostService, UserService } from "./services";

@Module({
  providers: [
      UserService,
      PostService
  ]
})
export class AppModule {}

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();

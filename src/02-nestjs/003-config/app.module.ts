import { Module } from "@nestjs/common";
import { PostService, UserService } from "./services";
import { UserFactory } from "./services";
import { NestFactory } from "@nestjs/core";

@Module({
  providers: [
      UserFactory,
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

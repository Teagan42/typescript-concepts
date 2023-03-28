import { Module } from "@nestjs/common";
import { PostService, UserFactory, UserService, PostFactory } from "./services";
import { NestFactory } from "@nestjs/core";


@Module({
  providers: [
    UserFactory,
    UserService,
    PostService,
    PostFactory,
  ],
  exports: [
    UserFactory,
    PostFactory
  ]
})
export class AppModule {
}

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const userFactory = app.get<typeof UserFactory.useFactory>(UserFactory.provide);
  const postFactory = app.get<typeof PostFactory.useFactory>(PostFactory.provide);
  console.log(userFactory("Jim"));
  console.log(postFactory("Breaking News", "Sam is born!", userFactory("Sam")));

}

bootstrap();

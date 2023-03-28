import { Module } from "@nestjs/common";
import { PostService, UserService } from "./services";
import { UserFactory } from "./services";
import { NestFactory, RouterModule } from "@nestjs/core";
import { AppController } from "./app.controller";
import { UserModule } from "./services/user.module";
import { PostModule } from "./services/posts/post.module";

@Module({
  imports: [
      UserModule,
      RouterModule.register([
        {
          path: "/",
          module: AppModule,
          children: [
            {
              path: "users/:userId?",
              module: UserModule,
              children: [
                {
                  path: "posts/:postId?",
                  module: PostModule
                }
              ]
            }
          ]
        }
      ])
  ],
  controllers: [AppController]
})
export class AppModule {}

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();

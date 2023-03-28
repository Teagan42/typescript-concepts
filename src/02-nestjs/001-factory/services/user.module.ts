import { Module } from "@nestjs/common";
import { UserFactory } from "./user.factory";
import { UserService } from "./user.service";
import { PostService } from "./posts/post.service";
import { UserController } from "./user.controller";
import { PostModule } from "./posts/post.module";

@Module({
  imports: [PostModule],
  providers: [
      UserFactory,
    UserService,
  ],
  controllers: [UserController],
  exports: [PostModule]
})
export class UserModule {}

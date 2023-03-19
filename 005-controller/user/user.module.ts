import { Module } from "@nestjs/common";
import { UserFactory } from "./user.factory";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { PostModule } from "./post";

@Module({
  imports: [
      PostModule
  ],
  providers: [
      UserFactory,
      UserService,
  ],
  controllers: [UserController]
})
export class UserModule {}

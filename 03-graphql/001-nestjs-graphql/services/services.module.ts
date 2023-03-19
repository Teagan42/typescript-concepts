import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { PostService } from "./post.service";
import { UserFactory } from "./user.factory";

@Module({
  providers: [
      UserService,
      PostService,
      UserFactory
  ],
  exports: [
      UserService,
      PostService,
  ]
})
export class ServicesModule {}

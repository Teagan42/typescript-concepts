import { Module } from "@nestjs/common";
import { UserFactory } from "./user.factory";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { RequestCountInterceptor } from "../interceptors/request-count.interceptor";

@Module({
  providers: [
      UserFactory,
    UserService,
      RequestCountInterceptor
  ],
  controllers: [UserController],
})
export class UserModule {}

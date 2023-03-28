import { Body, Controller, Get, Param, Put, UseGuards, UseInterceptors } from "@nestjs/common";
import { UserService } from "./user.service";
import { HelloOnly } from "../guards/guard.hello-only";
import { RequestCountInterceptor } from "../interceptors/request-count.interceptor";

@Controller()
export class UserController {
  constructor(
      private readonly userService: UserService
  ) {
  }

  @Put()
  putUser(@Body("username") username: string, @Body("tag") tag: string) {
    console.log(username, tag);
    return this.userService.createUser(username, tag);
  }

  @Get()
  getUsers() {
    return this.userService.getAll();
  }

  @Get(":userId")
  @UseGuards(HelloOnly)
  @UseInterceptors(RequestCountInterceptor)
  getUser(@Param("userId") userId: string) {
    return this.userService.get(userId);
  }
}

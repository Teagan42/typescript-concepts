import { Body, Controller, Get, Param, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { PostService } from "./posts/post.service";

@Controller()
export class UserController {
  constructor(
      private readonly userService: UserService,
      private readonly postService: PostService
  ) {
  }

  @Put()
  putUser(@Body("username") username: string) {
    return this.userService.createUser(username);
  }

  @Get()
  getUsers() {
    return this.userService.getAll();
  }

  @Get()
  getUser(@Param("userId") userId: string) {
    return this.userService.get(userId);
  }
}

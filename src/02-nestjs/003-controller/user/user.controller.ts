import { Controller, Get, Param } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get(":userId")
  getUser(@Param("userId") userId: string): User {
    return this.userService.get(userId);
  }
}

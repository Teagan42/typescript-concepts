import { BadRequestException, CanActivate, ExecutionContext, HttpException, Injectable } from "@nestjs/common";
import { UserService } from "../services";

class RudeError extends Error {
  constructor() {
    super("How rude!");
  }
}

@Injectable()
export class HelloOnly implements CanActivate {

  constructor(private readonly userService: UserService) {
  }

  canActivate(context: ExecutionContext): boolean {
    const {userId} = context.switchToHttp().getRequest().params;
    const user = this.userService.get(userId);
    if (!user) {
      return false;
    }
    if (user.tag.toLowerCase() !== "hello") {
      throw new BadRequestException("Invalid Request", {cause: new RudeError(), description: "The user you requested didn't even say hello"});
    }
    return true;
  }

}

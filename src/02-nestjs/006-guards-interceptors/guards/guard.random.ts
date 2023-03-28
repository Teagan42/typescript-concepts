import { BadRequestException, CanActivate, ExecutionContext, HttpException, Injectable } from "@nestjs/common";
import { UserService } from "../services";

class RandomError extends Error {
  constructor() {
    super("Just Because!");
  }
}

@Injectable()
export class Random implements CanActivate {

  canActivate(context: ExecutionContext): boolean {
    const x = Math.random() * 100;
    if (x < 10) {
      throw new BadRequestException("Invalid Request", {cause: new RandomError(), description: "I just didn't feel like you deserved to make this API call."});
    }
    return true;
  }

}

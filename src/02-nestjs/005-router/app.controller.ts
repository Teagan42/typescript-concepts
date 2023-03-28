import { Controller, Get } from "@nestjs/common";
import { UserService } from "./services";

@Controller()
export class AppController {
  constructor() {
  }

  @Get()
  getNothing() {
    return "Nothing here";
  }
}

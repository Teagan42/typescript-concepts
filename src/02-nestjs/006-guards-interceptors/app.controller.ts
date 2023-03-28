import { Controller, Get, UseGuards } from "@nestjs/common";
import { UserService } from "./services";
import { HelloOnly } from "./guards/guard.hello-only";

@Controller()
export class AppController {
  constructor() {
  }

  @Get()
  getNothing() {
    return "Nothing here";
  }
}

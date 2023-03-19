import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  constructor(private readonly postService: PostService) {
  }
  @Get()
  sayHell() {
    return "Hello";
  }
}

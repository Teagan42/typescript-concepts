import { Controller, Get } from "@nestjs/common";
import {PostService} from './user';

@Controller()
export class AppController {
  constructor(private readonly postService: PostService) {
  }
  @Get()
  sayHell() {
    return "Hello";
  }
}

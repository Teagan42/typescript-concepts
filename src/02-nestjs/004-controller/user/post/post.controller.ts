import { Controller, Get, Param } from "@nestjs/common";
import { PostService } from "./post.service";

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {
  }

  @Get(":userId/posts")
  getUserPosts(@Param("userId") userId: string) {
    return this.postService.getUserPosts(userId);
  }

  @Get(":userId/posts/:postId")
  @Get("posts/:postId")
  getPost(@Param("postId") postId: string) {
    return this.postService.getPost(postId);
  }
}

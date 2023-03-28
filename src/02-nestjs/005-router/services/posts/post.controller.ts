import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PostService } from "./post.service";

class PostDTO {
  title: string;
  content: string;
}

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {
  }

  @Get()
  getPosts(@Param("userId") userId: string) {
    if (!userId) {
      return this.postService.getAllPosts();
    }
    return this.postService.getUserPosts(userId);
  }

  @Get()
  getAllPosts(@Param("postId") postId: string) {
    return this.postService.getPost(postId);
  }

  @Post()
  createPost(@Param("userId") userId: string, @Body("title") title: string, @Body("content") content: string) {
    return this.postService.createPost(userId, title, content);
  }
}

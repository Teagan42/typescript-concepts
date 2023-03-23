import { Post, User } from "../models";
import { Injectable } from "@nestjs/common";
import { Environment } from "../environment/environment";

@Injectable()
export class PostService {
  private posts: Post[] = [];

  constructor(private readonly environment: Environment) {
  }

  getPost(id: string): Post {
    const post = this.posts.find((p) => p.id === id);
    this.environment.log(post);
    return post;
  }

  createPost(user: User, title: string, content: string): Post {
    const post = {
      id: "someId",
      user,
      title,
      content
    };
    this.posts.push(post);
    return post;
  }
}

import { Post, User } from "../models";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PostService {
  private posts: Post[] = [];

  constructor() {
  }

  getPost(id: string): Post {
    return this.posts.find((p) => p.id === id);
  }

  getUsersPosts(userId: string): Post[] {
    return this.posts.filter((p) => p.userId === userId);
  }

  createPost(user: User, title: string, content: string): Post {
    const post = {
      id: "someId",
      userId: user.id,
      user,
      title,
      content
    };
    this.posts.push(post);
    return post;
  }
}

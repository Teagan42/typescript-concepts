import { Post, User } from "../../models/index";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PostService {
  private posts: Post[] = [];

  constructor() {
  }

  getAllPosts(): Post[] {
    return this.posts;
  }

  getPost(id: string): Post {
    return this.posts.find((p) => p.id === id);
  }

  getUserPosts(userId: string): Post[] {
    return this.posts.filter((p) => p.userId === userId);
  }

  createPost(userId: string, title: string, content: string): Post {
    const post = {
      id: "someId",
      userId,
      title,
      content
    };
    this.posts.push(post);
    return post;
  }
}

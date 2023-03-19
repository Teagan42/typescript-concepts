import { PostService } from "./post.service";
import { Post, User } from "../models";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  private users: User[] = [];

  constructor(private readonly postService: PostService) {
  }

  getAll(): User[] {
    return this.users;
  }

  get(id: string): User {
    return this.users.find((p) => p.id === id);
  }

  createPost(userId: string, title: string, content: string): Post {
    const user = this.get(userId);
    return this.postService.createPost(user, title, content);
  }
}

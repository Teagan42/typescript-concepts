import { PostService } from "./post.service";
import { Post, User } from "../models";
import { Inject, Injectable } from "@nestjs/common";
import { UserFactory, KEY } from "./user.factory";

@Injectable()
export class UserService {
  private users: User[] = [];

  constructor(
      @Inject(KEY) private readonly userFactory: (name: string) => User,
      private readonly postService: PostService) {
  }

  getAll(): User[] {
    return this.users;
  }

  createUser(name: string): User {
    const user = this.userFactory(name);
    this.users.push(user);
    return user;
  }

  get(id: string): User {
    return this.users.find((p) => p.id === id);
  }

  getPosts(userId: string): Post[] {
    return this.postService.getUsersPosts(userId);
  }

  createPost(userId: string, title: string, content: string): Post {
    const user = this.get(userId);
    return this.postService.createPost(user, title, content);
  }
}

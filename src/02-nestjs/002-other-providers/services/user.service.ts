import { PostService } from "./post.service";
import { Post, User } from "../models";
import { Inject, Injectable } from "@nestjs/common";
import { UserFactory, KEY } from "./user.factory";
import { Environment } from "../environment/environment";

@Injectable()
export class UserService {
  private users: User[] = [];

  constructor(
      @Inject(KEY) private readonly userFactory: (name: string) => User,
      private readonly postService: PostService,
      private readonly environment: Environment) {
  }

  getAll(): User[] {
    return this.users;
  }

  createUser(name: string): User {
    const user = this.userFactory(name);
    this.environment.log(user);
    this.users.push(user);
    return user;
  }

  get(id: string): User {
    return this.users.find((p) => p.id === id);
  }

  createPost(userId: string, title: string, content: string): Post {
    const user = this.get(userId);
    return this.postService.createPost(user, title, content);
  }
}

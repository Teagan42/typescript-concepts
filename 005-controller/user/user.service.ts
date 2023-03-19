import { Inject, Injectable } from "@nestjs/common";
import { KEY } from "./user.factory";
import { User } from "./user";
import { Post, PostService } from "./post";

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

  createPost(userId: string, title: string, content: string): Post {
    return this.postService.createPost(userId, title, content);
  }
}

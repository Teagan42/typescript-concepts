import { User } from "./user.model";
import { Inject, Injectable } from "@nestjs/common";
import { KEY } from "./user.factory";

@Injectable()
export class UserService {
  private users: User[] = [];

  constructor(
      @Inject(KEY) private readonly userFactory: (name: string) => User) {
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
}

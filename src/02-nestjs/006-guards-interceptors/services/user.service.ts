import { Post, User } from "../models";
import { Inject, Injectable } from "@nestjs/common";
import { UserFactory, KEY } from "./user.factory";

@Injectable()
export class UserService {
  private users: User[] = [];
  private userRequests: Record<string, number> = {};

  constructor(
      @Inject(KEY) private readonly userFactory: (name: string, tag: string) => User) {
  }

  incrementRequest(userId: string): number {
    if (!this.userRequests[userId]) {
      this.userRequests[userId] = 0;
    }
    this.userRequests[userId]++;
    return this.userRequests[userId];
  }

  getAll(): User[] {
    return this.users;
  }

  createUser(name: string, tag: string): User {
    const user = this.userFactory(name, tag);
    this.users.push(user);
    return user;
  }

  get(id: string): User {
    return this.users.find((p) => p.id === id);
  }
}

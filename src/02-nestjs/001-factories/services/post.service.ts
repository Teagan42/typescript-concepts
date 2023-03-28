import { Post, User } from "../models";
import { Inject, Injectable } from "@nestjs/common";
import { USER_FACTORY_KEY } from "./user.factory";

@Injectable()
export class PostService {
  private posts: Post[] = [];

  constructor(@Inject(USER_FACTORY_KEY) private readonly postFactory: (title: string, content: string, user: User) => Post) {
  }

  getPost(id: string): Post {
    return this.posts.find((p) => p.id === id);
  }

  createPost(user: User, title: string, content: string): Post {
    const post = this.postFactory(title,content,user);
    this.posts.push(post);
    return post;
  }
}

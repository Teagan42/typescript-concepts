import { Post, User } from "../models";

export class PostService {
  private posts: Post[] = [];

  constructor() {
  }

  getPost(id: string): Post {
    return this.posts.find((p) => p.id === id);
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

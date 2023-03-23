import { Post, User } from "../models";
export declare class UserService {
    private users;
    private postService;
    getAll(): User[];
    get(id: string): User;
    createPost(userId: string, title: string, content: string): Post;
}

import { PostService } from "./post.service";
import { Post, User } from "../models";
export declare class UserService {
    private readonly postService;
    private users;
    constructor(postService: PostService);
    getAll(): User[];
    get(id: string): User;
    createPost(userId: string, title: string, content: string): Post;
}

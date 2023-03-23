import { PostService } from "./post.service";
import { Post, User } from "../models";
export declare class UserService {
    private readonly userFactory;
    private readonly postService;
    private users;
    constructor(userFactory: (name: string) => User, postService: PostService);
    getAll(): User[];
    createUser(name: string): User;
    get(id: string): User;
    getPosts(userId: string): Post[];
    createPost(userId: string, title: string, content: string): Post;
}

import { PostService } from "./post.service";
import { Post, User } from "../models";
import { Environment } from "../environment/environment";
export declare class UserService {
    private readonly userFactory;
    private readonly postService;
    private readonly environment;
    private users;
    constructor(userFactory: (name: string) => User, postService: PostService, environment: Environment);
    getAll(): User[];
    createUser(name: string): User;
    get(id: string): User;
    createPost(userId: string, title: string, content: string): Post;
}

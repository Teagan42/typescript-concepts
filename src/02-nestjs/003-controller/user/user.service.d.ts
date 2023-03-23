import { User } from "./user";
import { Post, PostService } from "./post";
export declare class UserService {
    private readonly userFactory;
    private readonly postService;
    private users;
    constructor(userFactory: (name: string) => User, postService: PostService);
    getAll(): User[];
    createUser(name: string): User;
    get(id: string): User;
    createPost(userId: string, title: string, content: string): Post;
}

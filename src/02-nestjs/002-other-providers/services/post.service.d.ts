import { Post, User } from "../models";
import { Environment } from "../environment/environment";
export declare class PostService {
    private readonly environment;
    private posts;
    constructor(environment: Environment);
    getPost(id: string): Post;
    createPost(user: User, title: string, content: string): Post;
}

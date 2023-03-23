import { Post, User } from "../models";
export declare class PostService {
    private posts;
    constructor();
    getPost(id: string): Post;
    createPost(user: User, title: string, content: string): Post;
}

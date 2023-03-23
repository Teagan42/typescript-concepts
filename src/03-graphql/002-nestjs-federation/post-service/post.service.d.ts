import { Post } from "./post.model";
export declare class PostService {
    private posts;
    constructor();
    getPost(id: string): Post;
    getUsersPosts(userId: string): Post[];
    createPost(userId: string, title: string, content: string): Post;
}

import { Post } from "./post";
export declare class PostService {
    private posts;
    constructor();
    getPost(id: string): Post;
    getUserPosts(userId: string): Post[];
    createPost(userId: string, title: string, content: string): Post;
}

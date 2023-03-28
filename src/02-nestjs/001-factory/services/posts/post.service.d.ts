import { Post } from "../../models/index";
export declare class PostService {
    private posts;
    constructor();
    getAllPosts(): Post[];
    getPost(id: string): Post;
    getUserPosts(userId: string): Post[];
    createPost(userId: string, title: string, content: string): Post;
}

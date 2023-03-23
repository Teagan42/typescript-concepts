import { PostService } from "./post.service";
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    getUserPosts(userId: string): import("./post").Post[];
    getPost(postId: string): import("./post").Post;
}

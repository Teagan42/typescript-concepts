import { Post } from "./post.model";
import { PostService } from "./post.service";
export declare class PostResolver {
    private readonly postService;
    constructor(postService: PostService);
    resolveReference(reference: {
        __typeName: string;
        id: string;
    }): Post;
    user(post: Post): {
        __typeName: string;
        id: string;
    };
    getPost(postId: string): Post;
}

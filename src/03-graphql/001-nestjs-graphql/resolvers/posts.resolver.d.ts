import { Post } from "../models";
import { PostService } from "../services";
export declare class PostsResolver {
    private readonly postService;
    constructor(postService: PostService);
    getUser(post: Post): {
        __typeName: string;
        id: string;
    };
    getPost(postId: string): Post;
}

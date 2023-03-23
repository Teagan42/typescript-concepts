import { PostService } from "./post.service";
import { Post } from "./post.model";
export declare class UserResolver {
    private readonly postService;
    constructor(postService: PostService);
    getPosts(userId: string): Post[];
}

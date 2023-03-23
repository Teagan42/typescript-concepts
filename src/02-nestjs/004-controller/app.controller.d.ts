import { PostService } from './user';
export declare class AppController {
    private readonly postService;
    constructor(postService: PostService);
    sayHell(): string;
}

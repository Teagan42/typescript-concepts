import { User } from "./user.model";
export declare class Post {
    id: string;
    userId: string;
    user?: User;
    title: string;
    content: string;
}

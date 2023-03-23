import { User } from "../models";
import { UserService } from "../services";
export declare class UsersResolver {
    private readonly userService;
    constructor(userService: UserService);
    posts(user: User): {
        __typeName: string;
        id: string;
    }[];
    getUser(userId: string): User;
}

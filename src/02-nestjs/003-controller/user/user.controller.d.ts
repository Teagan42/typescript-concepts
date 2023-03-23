import { UserService } from "./user.service";
import { User } from "./user";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUser(userId: string): User;
}

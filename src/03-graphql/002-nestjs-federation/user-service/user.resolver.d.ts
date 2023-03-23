import { User } from "./user.model";
import { UserService } from "./user.service";
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    resolveReference(reference: {
        __typename: string;
        id: string;
    }): User;
    getUser(userId: string): User;
}

import { User } from "./user.model";
export declare class UserService {
    private readonly userFactory;
    private users;
    constructor(userFactory: (name: string) => User);
    getAll(): User[];
    createUser(name: string): User;
    get(id: string): User;
}

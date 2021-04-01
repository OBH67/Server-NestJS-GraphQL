import { User } from './user.entity';
import { CreateUserInput, UpdateUserInput } from './user-inputs.dto';
import { UserService } from './user.service';
import { Types } from 'mongoose';
export declare class UserResolver {
    private readonly us;
    constructor(us: UserService);
    createUser(createUserInput: CreateUserInput): Promise<import("./user.entity").UserDocument>;
    login(email: string, password: string): Promise<string | import("graphql").GraphQLError>;
    findAllUsers(): Promise<import("./user.entity").UserDocument[]>;
    UpdateUserInput(user: User, updateUserInput: UpdateUserInput): Promise<import("./user.entity").UserDocument>;
    UpdateUserPass(user: User, currPass: string, newPass: string): Promise<import("./user.entity").UserDocument>;
    findOne(_id: Types.ObjectId): Promise<import("./user.entity").UserDocument>;
    removeUser(_id: string): Promise<import("./user.entity").UserDocument>;
    CurrentUser(user: User): Promise<import("./user.entity").UserDocument>;
}

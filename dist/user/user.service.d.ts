import { Model, Types } from 'mongoose';
import { UserDocument } from './user.entity';
import { CreateUserInput, UpdateUserInput } from './user-inputs.dto';
import { JwtService } from '@nestjs/jwt';
import { GraphQLError } from 'graphql';
export declare class UserService {
    private jwtService;
    private UserModel;
    constructor(jwtService: JwtService, UserModel: Model<UserDocument>);
    createUser(createUserInput: CreateUserInput): Promise<UserDocument>;
    login({ password, email }: {
        password: any;
        email: any;
    }): Promise<string | GraphQLError>;
    findAll(): Promise<UserDocument[]>;
    updateUser(_id: any, updateUserInput: UpdateUserInput): Promise<UserDocument>;
    updatePassword(_id: any, currPass: any, newPass: any): Promise<UserDocument>;
    findOne(_id: Types.ObjectId): Promise<UserDocument>;
    remove(_id: string): Promise<UserDocument>;
}

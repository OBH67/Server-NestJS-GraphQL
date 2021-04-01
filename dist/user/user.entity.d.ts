import { Document, Types } from 'mongoose';
export declare class User {
    _id: Types.ObjectId;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    createdAt: string;
    roles?: string;
}
export declare type UserDocument = User & Document;
export declare const UserSchema: import("mongoose").Schema<Document<User, {}>, import("mongoose").Model<any, any>, undefined>;

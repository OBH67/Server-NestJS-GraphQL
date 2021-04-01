export declare class CreateUserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: string;
}
declare const UpdateUserInput_base: import("@nestjs/common").Type<Partial<Omit<CreateUserInput, "password" | "createdAt">>>;
export declare class UpdateUserInput extends UpdateUserInput_base {
}
export {};

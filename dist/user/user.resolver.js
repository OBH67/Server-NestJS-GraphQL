"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("./user.entity");
const user_inputs_dto_1 = require("./user-inputs.dto");
const user_service_1 = require("./user.service");
const common_1 = require("@nestjs/common");
const user_guard_1 = require("./user.guard");
const user_docrator_1 = require("./user.docrator");
const mongoose_1 = require("mongoose");
let UserResolver = class UserResolver {
    constructor(us) {
        this.us = us;
    }
    async createUser(createUserInput) {
        try {
            return await this.us.createUser(createUserInput);
        }
        catch (err) {
            console.error(err);
        }
    }
    async login(email, password) {
        try {
            return await this.us.login({ email, password });
        }
        catch (err) {
            console.error(err);
        }
    }
    async findAllUsers() {
        try {
            return await this.us.findAll();
        }
        catch (err) {
            console.error(err);
        }
    }
    async UpdateUserInput(user, updateUserInput) {
        try {
            return await this.us.updateUser(user._id, updateUserInput);
        }
        catch (err) {
            console.error(err);
        }
    }
    async UpdateUserPass(user, currPass, newPass) {
        try {
            return await this.us.updatePassword(user._id, currPass, newPass);
        }
        catch (err) {
            console.error(err);
        }
    }
    async findOne(_id) {
        return await this.us.findOne(_id);
    }
    async removeUser(_id) {
        try {
            return await this.us.remove(_id);
        }
        catch (err) {
            console.error(err);
        }
    }
    async CurrentUser(user) {
        try {
            return await this.us.findOne(user._id);
        }
        catch (err) {
            console.error(err);
        }
    }
};
__decorate([
    graphql_1.Mutation(() => user_entity_1.User),
    __param(0, graphql_1.Args('createUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_inputs_dto_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    graphql_1.Mutation(() => String),
    __param(0, graphql_1.Args('email')),
    __param(1, graphql_1.Args('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    graphql_1.Query(() => [user_entity_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "findAllUsers", null);
__decorate([
    graphql_1.Mutation(() => user_entity_1.User),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, user_docrator_1.CurrentUser()),
    __param(1, graphql_1.Args('updateUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        user_inputs_dto_1.UpdateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "UpdateUserInput", null);
__decorate([
    graphql_1.Mutation(() => user_entity_1.User),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, user_docrator_1.CurrentUser()),
    __param(1, graphql_1.Args('currPass')),
    __param(2, graphql_1.Args('newPass')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "UpdateUserPass", null);
__decorate([
    graphql_1.Query(() => user_entity_1.User),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('_id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "findOne", null);
__decorate([
    graphql_1.Mutation(() => user_entity_1.User),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "removeUser", null);
__decorate([
    graphql_1.Query(() => user_entity_1.User),
    common_1.UseGuards(user_guard_1.GqlAuthGuard),
    __param(0, user_docrator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "CurrentUser", null);
UserResolver = __decorate([
    graphql_1.Resolver(() => user_entity_1.User),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map
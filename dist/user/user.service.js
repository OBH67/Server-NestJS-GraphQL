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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_entity_1 = require("./user.entity");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const graphql_1 = require("graphql");
let UserService = class UserService {
    constructor(jwtService, UserModel) {
        this.jwtService = jwtService;
        this.UserModel = UserModel;
    }
    async createUser(createUserInput) {
        try {
            const isUser = await this.UserModel.findOne({ email: createUserInput.email });
            if (!isUser) {
                createUserInput.password = await bcrypt
                    .hash(createUserInput.password, 10)
                    .then((r) => r);
                return await new this.UserModel(createUserInput).save();
            }
            else {
                throw new graphql_1.GraphQLError('This email already exist on the database');
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    async login({ password, email }) {
        try {
            const user = await this.UserModel.findOne({ email });
            return user && (await bcrypt.compare(password, user.password))
                ? await this.jwtService.signAsync({ email, _id: user._id })
                : new graphql_1.GraphQLError('¡The password or email is wrong!');
        }
        catch (err) {
            console.error(err);
        }
    }
    async findAll() {
        try {
            return await this.UserModel.find().exec();
        }
        catch (err) {
            console.error(err);
        }
    }
    async updateUser(_id, updateUserInput) {
        try {
            return await this.UserModel.findByIdAndUpdate(_id, updateUserInput, {
                new: true,
            }).exec();
        }
        catch (err) {
            console.error(err);
        }
    }
    async updatePassword(_id, currPass, newPass) {
        try {
            const User = await this.UserModel.findById(_id);
            if (await bcrypt.compare(currPass, User.password)) {
                User.password = await bcrypt.hash(newPass, 10);
                return await new this.UserModel(User).save();
            }
        }
        catch (err) {
            console.error(err);
        }
    }
    async findOne(_id) {
        try {
            return await this.UserModel.findById(_id);
        }
        catch (err) {
            console.error(err);
        }
    }
    async remove(_id) {
        try {
            return await this.UserModel.findByIdAndRemove(_id);
        }
        catch (err) {
            console.error(err);
        }
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(1, mongoose_1.InjectModel(user_entity_1.User.name)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
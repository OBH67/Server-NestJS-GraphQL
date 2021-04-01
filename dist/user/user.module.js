"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_resolver_1 = require("./user.resolver");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("./user.entity");
const jwt_strategy_1 = require("./jwt.strategy");
const jwt_1 = require("@nestjs/jwt");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [
            jwt_1.JwtModule.register({
                secret: 'hard!to-guess_secret',
                signOptions: { expiresIn: '24h' },
            }),
            mongoose_1.MongooseModule.forFeature([{ name: user_entity_1.User.name, schema: user_entity_1.UserSchema }]),
        ],
        providers: [user_resolver_1.UserResolver, user_service_1.UserService, jwt_strategy_1.JwtStrategy],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map
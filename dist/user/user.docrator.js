"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
exports.CurrentUser = common_1.createParamDecorator((data, context) => {
    console.log(graphql_1.GqlExecutionContext.create(context).getContext().req.user);
    const { _id, email } = graphql_1.GqlExecutionContext.create(context).getContext().req.user;
    return {
        _id,
        email,
    };
});
//# sourceMappingURL=user.docrator.js.map
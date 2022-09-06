"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import { router } from "./routes/loginRoutes";
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
// import { router as controllerRouter } from './controllers/decorators/controller';
var AppRouter_1 = require("./AppRouter");
require("./controllers/LoginController");
require("./controllers/RootController");
var app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true })); //body property
app.use((0, cookie_session_1.default)({ keys: ["laskdfg"] }));
//
// app.use(router);
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(1234, function () {
    console.log("Listing On port 1234");
});

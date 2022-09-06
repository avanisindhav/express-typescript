"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.put = exports.del = exports.post = exports.get = void 0;
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetaDataKeys_1 = require("./MetaDataKeys");
function routerBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetaDataKeys_1.MetaDataKeys.path, path, target, key);
            Reflect.defineMetadata(MetaDataKeys_1.MetaDataKeys.method, method, target, key);
        };
    };
}
exports.get = routerBinder(Methods_1.Methods.get);
exports.post = routerBinder(Methods_1.Methods.post);
exports.del = routerBinder(Methods_1.Methods.del);
exports.put = routerBinder(Methods_1.Methods.put);
exports.patch = routerBinder(Methods_1.Methods.patch);

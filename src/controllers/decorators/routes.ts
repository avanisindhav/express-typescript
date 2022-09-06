import "reflect-metadata";
import { Methods } from "./Methods";
import { MetaDataKeys } from "./MetaDataKeys";
import { RequestHandler } from "express";

interface RouterHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routerBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouterHandlerDescriptor) {
      Reflect.defineMetadata(MetaDataKeys.path, path, target, key);
      Reflect.defineMetadata(MetaDataKeys.method, method, target, key);
    };
  };
}

export const get = routerBinder(Methods.get);
export const post = routerBinder(Methods.post);
export const del = routerBinder(Methods.del);
export const put = routerBinder(Methods.put);
export const patch = routerBinder(Methods.patch);

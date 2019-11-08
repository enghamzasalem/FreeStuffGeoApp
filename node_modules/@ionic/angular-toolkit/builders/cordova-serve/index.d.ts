import { BuilderContext, BuilderOutput } from '@angular-devkit/architect';
import { json } from '@angular-devkit/core';
import { CordovaServeBuilderSchema } from './schema';
export declare type CordovaDevServerBuilderOptions = CordovaServeBuilderSchema & json.JsonObject;
export declare function serveCordova(options: CordovaServeBuilderSchema, context: BuilderContext): Promise<BuilderOutput>;
declare const _default: import("@angular-devkit/architect/src/internal").Builder<CordovaDevServerBuilderOptions>;
export default _default;

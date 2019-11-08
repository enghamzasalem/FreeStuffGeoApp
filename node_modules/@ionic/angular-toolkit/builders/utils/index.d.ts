import { CordovaBuildBuilderSchema } from '../cordova-build/schema';
import { CordovaServeBuilderSchema } from '../cordova-serve/schema';
export declare function validateBuilderConfig(builderOptions: CordovaBuildBuilderSchema): {
    browserTarget: string;
    platform?: string | undefined;
    cordovaBasePath?: string | undefined;
    sourceMap?: boolean | undefined;
    cordovaAssets?: boolean | undefined;
    cordovaMock?: boolean | undefined;
    consolelogs?: boolean | undefined;
    consolelogsPort?: number | undefined;
};
export declare function prepareBrowserConfig(options: CordovaBuildBuilderSchema | CordovaServeBuilderSchema | any, browserOptions: any): any;

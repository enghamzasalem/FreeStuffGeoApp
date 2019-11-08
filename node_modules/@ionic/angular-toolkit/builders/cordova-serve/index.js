"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const architect_1 = require("@angular-devkit/architect");
const utils_1 = require("../utils");
const log_server_1 = require("./log-server");
async function serveCordova(options, context) {
    return new Promise(async () => {
        context.reportStatus(`running cordova serve...`);
        const { devServerTarget, cordovaBuildTarget, port, host, ssl } = options;
        // Getting the original browser build options
        const cordovaBuildTargetSpec = architect_1.targetFromTargetString(cordovaBuildTarget);
        const cordovaBuildTargetOptions = await context.getTargetOptions(cordovaBuildTargetSpec);
        const browserBuildTargetSpec = architect_1.targetFromTargetString(cordovaBuildTargetOptions.browserTarget);
        // What we actually need....
        const browserBuildTargetOptions = await context.getTargetOptions(browserBuildTargetSpec);
        // Modifying those options to pass in cordova-speicfic stuff
        utils_1.prepareBrowserConfig(options, browserBuildTargetOptions);
        if (options.consolelogs && options.consolelogsPort) {
            await log_server_1.createConsoleLogServer(host, options.consolelogsPort);
        }
        const devServerTargetSpec = architect_1.targetFromTargetString(devServerTarget);
        const devServerTargetOptions = await context.getTargetOptions(devServerTargetSpec);
        return context
            .scheduleTarget(devServerTargetSpec, { host, port, ssl }, devServerTargetOptions)
            .then(buildEvent => (Object.assign({}, buildEvent)));
    });
}
exports.serveCordova = serveCordova;
exports.default = architect_1.createBuilder(serveCordova);

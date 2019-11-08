"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const fs_1 = require("fs");
function validateBuilderConfig(builderOptions) {
    // if we're mocking cordova.js, don't build cordova bundle
    const newOptions = Object.assign({}, builderOptions);
    if (newOptions.cordovaMock) {
        newOptions.cordovaAssets = true;
    }
    if (builderOptions.cordovaAssets && !builderOptions.platform) {
        throw new Error('The `--platform` option is required with `--cordova-assets`');
    }
    return newOptions;
}
exports.validateBuilderConfig = validateBuilderConfig;
function prepareBrowserConfig(options, browserOptions) {
    const optionsStarter = Object.assign({}, browserOptions);
    const cordovaBasePath = core_1.normalize(options.cordovaBasePath ? options.cordovaBasePath : '.');
    if (typeof options.sourceMap !== 'undefined') {
        optionsStarter.sourceMap = options.sourceMap;
    }
    // We always need to output the build to `www` because it is a hard
    // requirement of Cordova.
    if ('outputPath' in options) {
        optionsStarter.outputPath = core_1.join(cordovaBasePath, core_1.normalize('www'));
    }
    // Cordova CLI will error if `www` is missing. The Angular CLI deletes it
    // by default. Let's keep it around.
    if ('deleteOutputPath' in options) {
        optionsStarter.deleteOutputPath = false;
    }
    if (options.consolelogs) {
        // Write the config to a file, and then include that in the bundle so it loads on window
        const configPath = core_1.getSystemPath(core_1.join(core_1.normalize(__dirname), '../../assets', core_1.normalize('consolelog-config.js')));
        fs_1.writeFileSync(configPath, `window.Ionic = window.Ionic || {}; Ionic.ConsoleLogServerConfig = { wsPort: ${options.consolelogsPort} }`);
        if (optionsStarter.scripts) {
            optionsStarter.scripts.push({
                input: configPath,
                bundleName: 'consolelogs',
                lazy: false,
            });
            optionsStarter.scripts.push({
                input: core_1.getSystemPath(core_1.join(core_1.normalize(__dirname), '../../assets', core_1.normalize('consolelogs.js'))),
                bundleName: 'consolelogs',
                lazy: false,
            });
        }
    }
    if (options.cordovaMock) {
        if (browserOptions.scripts) {
            browserOptions.scripts.push({
                input: core_1.getSystemPath(core_1.join(core_1.normalize(__dirname), '../../assets', core_1.normalize('cordova.js'))),
                bundleName: 'cordova',
                lazy: false,
            });
        }
    }
    else if (options.cordovaAssets) {
        const platformWWWPath = core_1.join(cordovaBasePath, core_1.normalize(`platforms/${options.platform}/platform_www`));
        // Add Cordova www assets that were generated whenever platform(s) and
        // plugin(s) are added. This includes `cordova.js`,
        // `cordova_plugins.js`, and all plugin JS.
        if (optionsStarter.assets) {
            optionsStarter.assets.push({
                glob: '**/*',
                input: core_1.getSystemPath(platformWWWPath),
                output: './',
            });
        }
        // Register `cordova.js` as a global script so it is included in
        // `index.html`.
        if (optionsStarter.scripts) {
            optionsStarter.scripts.push({
                input: core_1.getSystemPath(core_1.join(platformWWWPath, core_1.normalize('cordova.js'))),
                bundleName: 'cordova',
                lazy: false,
            });
        }
    }
    return optionsStarter;
}
exports.prepareBrowserConfig = prepareBrowserConfig;

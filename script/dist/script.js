var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "path", "./utils", "fs-extra", "jscodeshift/src/Runner"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EjectScript = void 0;
    const path_1 = require("path");
    const utils_1 = require("./utils");
    const fs_extra_1 = require("fs-extra");
    const Runner_1 = require("jscodeshift/src/Runner");
    const currDir = process.cwd();
    function replaceScreenImports(targetDirectory, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const importTransformer = (0, path_1.join)(__dirname, `./transformer.js`);
            try {
                yield (0, Runner_1.run)(importTransformer, [targetDirectory], options !== null && options !== void 0 ? options : {});
            }
            catch (err) {
                console.error(`Error while replacing imports in ${targetDirectory}`, err);
            }
        });
    }
    const readAllFiles = (directoryPath, screenPath) => __awaiter(void 0, void 0, void 0, function* () {
        const directories = yield (0, fs_extra_1.readdir)(directoryPath);
        for (const dir of directories) {
            const fullPath = (0, path_1.join)(directoryPath, dir);
            const fileStats = yield (0, fs_extra_1.stat)(fullPath);
            if (fileStats.isFile()) {
                replaceScreenImports(fullPath, { screenPath });
            }
            else if (fileStats.isDirectory()) {
                console.log(`Directory: ${fullPath}`);
                yield readAllFiles(fullPath, screenPath); // Recursively read files if it's a directory
            }
        }
    });
    const generatePathsForTsConfig = (paths) => {
        const resultPaths = {};
        Object.keys(paths !== null && paths !== void 0 ? paths : {}).forEach((key) => {
            resultPaths[key] = [paths[key]];
        });
        return resultPaths;
    };
    class EjectScript {
        constructor(config) {
            this.config = config;
        }
        copyComponents() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    // Copy components from source to target
                    yield (0, utils_1.copyDirectoryFromSourceToTarget)({
                        sourceDirectory: this.config.components,
                        copyDestination: "./components/ui",
                    });
                }
                catch (err) {
                    console.error("Error while copying components", err);
                }
            });
        }
        copyScreens() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    // Copy screens from source to target
                    const pagesFiles = (0, path_1.join)(currDir, "app");
                    if ((0, fs_extra_1.existsSync)(pagesFiles)) {
                        yield readAllFiles(pagesFiles, (0, path_1.join)(currDir, this.config.screens));
                    }
                    // await copyDirectoryFromSourceToTarget({
                    //   sourceDirectory: join(currDir, this.config.screens),
                    //   copyDestination: join(currDir, this.config.screens),
                    //   options: {
                    //     paths: this.config.paths,
                    //   },
                    //   shouldTransform: true,
                    // });
                }
                catch (err) {
                    console.error("Error while copying screens", err);
                }
            });
        }
        updateTsConfig() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    // Update tsconfig.json
                    const tsConfigPath = `${currDir}/tsconfig.json`;
                    const tsConfig = require(tsConfigPath);
                    const paths = generatePathsForTsConfig(this.config.paths);
                    tsConfig.compilerOptions.paths = Object.assign(Object.assign({}, tsConfig.compilerOptions.paths), paths);
                    yield (0, fs_extra_1.writeFile)(tsConfigPath, JSON.stringify(tsConfig, null, 2));
                }
                catch (err) {
                    console.error("Error while updating tsconfig.json", err);
                }
            });
        }
        run() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    console.log("Running eject script...");
                    yield this.copyComponents();
                    console.log("Components copied successfully!");
                    console.log("Copying screens...");
                    yield this.copyScreens();
                    console.log("Screens copied successfully!");
                    console.log("Updating tsconfig.json...");
                    yield this.updateTsConfig();
                    console.log("tsconfig.json updated successfully!");
                }
                catch (err) {
                    console.error("Error while running eject script", err);
                }
            });
        }
    }
    exports.EjectScript = EjectScript;
});

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
        define(["require", "exports", "fs-extra", "path"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.copyDirectoriesFromSourceToTarget = exports.copyDirectoryFromSourceToTarget = void 0;
    const fs_extra_1 = require("fs-extra");
    const path_1 = require("path");
    const { run: jscodeshift } = require("jscodeshift/src/Runner");
    function replaceScreenImports(targetDirectory, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const importTransformer = (0, path_1.join)(__dirname, `./transformer.js`);
            console.log("options", options);
            try {
                yield jscodeshift(importTransformer, [targetDirectory], options);
            }
            catch (err) {
                console.error(`Error while replacing imports in ${targetDirectory}`, err);
            }
        });
    }
    function copyDirectoryFromSourceToTarget(_a) {
        return __awaiter(this, arguments, void 0, function* ({ sourceDirectory, copyDestination, options = {}, shouldTransform = false, depthLevel = 0, }) {
            try {
                if (!sourceDirectory) {
                    throw new Error(`Package not found!\npath: ${sourceDirectory}`);
                }
                if (!copyDestination) {
                    throw new Error(`Project not found!\npath: ${copyDestination}`);
                }
                const directories = (yield (0, fs_extra_1.readdir)(sourceDirectory)).filter((dirName) => !dirName.startsWith(".") &&
                    !dirName.includes("node_modules") &&
                    !dirName.includes("dist") &&
                    !dirName.includes("build"));
                for (const dir of directories) {
                    const source = (0, path_1.join)(sourceDirectory, dir);
                    const target = (0, path_1.join)(copyDestination, dir);
                    const fileStats = yield (0, fs_extra_1.stat)(source);
                    if (fileStats.isDirectory()) {
                        yield (0, fs_extra_1.ensureDir)(target);
                        yield copyDirectoryFromSourceToTarget({
                            sourceDirectory: source,
                            copyDestination: target,
                            depthLevel: depthLevel + 1,
                            options,
                            shouldTransform,
                        });
                    }
                    else if (fileStats.isFile() &&
                        !(dir.includes(".d.ts") || dir.includes(".jsx")) &&
                        depthLevel > 0) {
                        yield (0, fs_extra_1.ensureFile)(target);
                        console.info(`Copying file from ${source} to ${target}`);
                        yield (0, fs_extra_1.copyFile)(source, target);
                        console.info(`File copied successfully!`);
                        if (shouldTransform) {
                            console.log("Transforming imports for " + target + "...");
                            yield replaceScreenImports(target, options);
                            console.log("Imports transformed successfully!");
                        }
                    }
                }
            }
            catch (err) {
                console.error(`Error while copying ${sourceDirectory} to ${copyDestination}`, err);
            }
        });
    }
    exports.copyDirectoryFromSourceToTarget = copyDirectoryFromSourceToTarget;
    function copyDirectoriesFromSourceToTarget(configs, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                for (const config of configs) {
                    const { source, target } = config;
                    console.info(`\n************ Copying directories from ${source} to ${target} ************`);
                    yield copyDirectoryFromSourceToTarget({
                        sourceDirectory: (0, path_1.join)(process.cwd(), source),
                        copyDestination: (0, path_1.join)(process.cwd(), target),
                        options,
                    });
                }
            }
            catch (err) {
                console.error("Error while copying directories from source to target: ", err);
            }
        });
    }
    exports.copyDirectoriesFromSourceToTarget = copyDirectoriesFromSourceToTarget;
});

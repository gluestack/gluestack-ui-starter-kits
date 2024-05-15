#!/usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "fs-extra", "path", "process"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const fs_extra_1 = require("fs-extra");
    const path_1 = require("path");
    const process_1 = __importDefault(require("process"));
    function copyDirectoryFromSourceToTarget(packagePath_1, projectPath_1) {
        return __awaiter(this, arguments, void 0, function* (packagePath, projectPath, depthLevel = 0) {
            try {
                if (!packagePath) {
                    throw new Error(`Package not found!\npath: ${packagePath}`);
                }
                if (!projectPath) {
                    throw new Error(`Project not found!\npath: ${projectPath}`);
                }
                const directories = (yield (0, fs_extra_1.readdir)(packagePath)).filter((dirName) => !dirName.startsWith(".") &&
                    !dirName.includes("node_modules") &&
                    !dirName.includes("dist") &&
                    !dirName.includes("build"));
                for (const dir of directories) {
                    const source = (0, path_1.join)(packagePath, dir);
                    const target = (0, path_1.join)(projectPath, dir);
                    const fileStats = yield (0, fs_extra_1.stat)(source);
                    if (fileStats.isDirectory()) {
                        yield (0, fs_extra_1.ensureDir)(target);
                        yield copyDirectoryFromSourceToTarget(source, target, depthLevel + 1);
                    }
                    else if (fileStats.isFile() && depthLevel > 0) {
                        yield (0, fs_extra_1.ensureFile)(target);
                        console.info(`Copying file from ${source} to ${target}`);
                        yield (0, fs_extra_1.copyFile)(source, target);
                    }
                }
            }
            catch (err) {
                console.error(`Error while copying ${packagePath} to ${projectPath}`, err);
            }
        });
    }
    function copyDirectoriesFromSourceToTarget(configs) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                for (const config of configs) {
                    const { source, target } = config;
                    console.info(`\n************Copying directories from ${source} to ${target}************`);
                    yield copyDirectoryFromSourceToTarget((0, path_1.join)(process_1.default.cwd(), source), (0, path_1.join)(process_1.default.cwd(), target));
                }
            }
            catch (err) {
                console.error("Error while copying directories from source to target: ", err);
            }
        });
    }
    function main() {
        const configPath = (0, path_1.join)(process_1.default.cwd(), "starter-cli.config.js");
        if (!(0, fs_extra_1.existsSync)(configPath)) {
            console.error("Config file not found! Make sure you have starter-cli.config.js in your project root directory." +
                "config path: " +
                configPath);
            process_1.default.exit(1);
        }
        console.info("Config file found! Reading config file...");
        const { config } = require(configPath);
        if (!config) {
            const errorJSON = {
                config: [
                    {
                        source: "path/to/source",
                        target: "path/to/target",
                    },
                ],
            };
            throw new Error(`Config not found in starter-cli.config.js! Please add\n module.exports = ${JSON.stringify(errorJSON, null, 2)} \nto your config file.`);
        }
        console.info("Config file read successfully! Copying directories...");
        copyDirectoriesFromSourceToTarget(config);
    }
    main();
});

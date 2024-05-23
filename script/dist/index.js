#!/usr/bin/env node
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
(function (factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    var v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  } else if (typeof define === "function" && define.amd) {
    define([
      "require",
      "exports",
      "./script",
      "fs-extra",
      "path",
      "process",
    ], factory);
  }
})(function (require, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  const script_1 = require("./script");
  const fs_extra_1 = require("fs-extra");
  const path_1 = require("path");
  const process_1 = __importDefault(require("process"));
  function main() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const configPath = (0, path_1.join)(
          process_1.default.cwd(),
          "starter-cli.config.js"
        );
        if (!(0, fs_extra_1.existsSync)(configPath)) {
          console.error(
            "Config file not found! Make sure you have starter-cli.config.js in your project root directory." +
              "config path: " +
              configPath
          );
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
          throw new Error(
            `Config not found in starter-cli.config.js! Please add\n module.exports = ${JSON.stringify(
              errorJSON,
              null,
              2
            )} \nto your config file.`
          );
        }
        console.info("Config file read successfully! Copying directories...");
        console.log("config", config);
        // const fromKeys = Object.keys(config?.paths);
        // const index = fromKeys.findIndex((from) =>
        //   "@/components/ui".includes(from)
        // );
        // const from = fromKeys.find((from) =>
        //   "@/components/ui".includes(from)
        // );
        // console.log("index", index, from, config?.paths[from as string]);
        // process.exit(1);
        const ejectScript = new script_1.EjectScript(config);
        yield ejectScript.run();
        console.info("Directories copied successfully!");
        // copyDirectoriesFromSourceToTarget(config);
      } catch (err) {
        console.error("Error: ", err);
      }
    });
  }
  main();
});

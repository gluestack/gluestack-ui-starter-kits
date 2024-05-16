(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "fs", "fs-extra", "path"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const fs_1 = require("fs");
    const fs_extra_1 = require("fs-extra");
    const path_1 = require("path");
    const getScreenFile = (path, ogScreenPath) => {
        const fullPath = (0, path_1.join)(ogScreenPath, `${path}/index.tsx`);
        let content = "";
        if ((0, fs_1.existsSync)(fullPath)) {
            content = (0, fs_extra_1.readFileSync)(fullPath, "utf-8");
        }
        return content;
    };
    const transform = (file, api, options) => {
        try {
            const j = api.jscodeshift;
            const root = j(file.source);
            const ogScreenPath = options === null || options === void 0 ? void 0 : options.screenPath;
            let screenPath = "";
            let importName = "";
            let isDefaultExport = false;
            root
                .find(j.ImportDeclaration)
                .filter((path) => typeof path.node.source.value === "string" &&
                path.node.source.value.includes("@base-template/screens/"))
                .forEach((path) => {
                if (typeof path.node.source.value === "string" &&
                    path.node.source.value.includes("@base-template/screens/")) {
                    screenPath = path.node.source.value.replace("@base-template/screens/", "");
                }
            });
            root.find(j.ImportSpecifier).forEach((path) => {
                if (path.node.local && path.node.local.name) {
                    importName = path.node.local.name;
                }
            });
            root.find(j.ImportDefaultSpecifier).forEach((path) => {
                if (path.node.local && path.node.local.name) {
                    importName = path.node.local.name;
                }
            });
            root.find(j.ExportDefaultDeclaration).forEach((path) => {
                var _a;
                if (((_a = path.node.declaration) === null || _a === void 0 ? void 0 : _a.name) === importName) {
                    isDefaultExport = true;
                }
            });
            if (isDefaultExport) {
                return getScreenFile(screenPath, ogScreenPath);
            }
            return root.toSource();
        }
        catch (err) {
            console.log(`\x1b[31mError: ${err}\x1b[0m`);
        }
    };
    exports.default = transform;
});

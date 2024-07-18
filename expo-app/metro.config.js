const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");
const { withNativeWind } = require("nativewind/metro");

const projectRoot = __dirname;
const config = getDefaultConfig(projectRoot, {
  isCSSEnabled: true,
});

// 1. Watch all files within the monorepo
// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [path.resolve(projectRoot, "node_modules")];

// module.exports = config;

module.exports = withNativeWind(config, { input: "./global.css" });

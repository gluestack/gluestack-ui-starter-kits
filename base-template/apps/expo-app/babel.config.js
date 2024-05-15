const imageBabel = require("@unitools/babel-plugin-universal-image");
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@unitools/image": "@unitools/image-expo",
            "@unitools/router": "@unitools/router-expo",
          },
        },
      ],
      [
        imageBabel,
        {
          assetPath: "assets",
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};

/** @type {import('@gluestack-ui/starter-kit-cli').Config} */
module.exports = {
  config: [
    {
      source: "../base-template/packages/components",
      target: "../dump/components",
    },
    {
      source: "../base-template/packages/screens",
      target: "../dump/screens",
    },
  ],
};

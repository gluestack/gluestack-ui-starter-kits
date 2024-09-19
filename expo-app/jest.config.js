module.exports = {
  roots: ["<rootDir>/__tests__"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "__test__"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  reporters: ["default", "jest-junit"],

  testMatch: ["<rootDir>/__tests__/**/*.test.(js|jsx)"],
  forceExit: true,
};

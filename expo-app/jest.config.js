module.exports = {
  preset: "jest-expo",
  roots: ["<rootDir>/__tests__"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "__test__"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  reporters: ["default", "jest-junit"],

  testMatch: ["<rootDir>/__tests__/**/*.test.(js|jsx)"],
  forceExit: true,
};

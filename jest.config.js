/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  preset: "@vue/cli-plugin-unit-jest",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest", // Transform .vue files with vue3-jest
    "^.+\\.js$": "esbuild-jest", // Transform .js files with esbuild-jest for V8 support
  },
  testEnvironment: "jsdom", // Set the test environment to jsdom for Vue components
  moduleFileExtensions: ["js", "json", "vue"],
  testMatch: ["**/__tests__/**/*.test.js"],
};

module.exports = config;

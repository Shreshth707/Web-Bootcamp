const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      fixturesFolder : "e2e/**/",
      baseUrl : "http://localhost:3000/",
      specPattern : "e2e/**/*.spec.js"
    }
});

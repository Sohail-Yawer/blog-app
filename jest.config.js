// jest.config.js
module.exports = {
    preset: 'react-app',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    coverageThreshold: {
      global: {
        statements: 80,
        branches: 80,
        lines: 80,
        functions: 80,
      },
    },
    // Other Jest configurations...
  };
  
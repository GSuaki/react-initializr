module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  modulePaths: [
    '<rootDir>/src/',
  ],
  setupFiles: [
    './jest.setup.js',
  ],
  testEnvironment: 'node',
  coverageDirectory: './coverage/',
  collectCoverage: true,
  coverageReporters: [
    'json',
    'html',
  ],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
};

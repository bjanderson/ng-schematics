module.exports = {

  collectCoverageFrom: [
    '<rootDir>/src/app/**/*.ts',
    '!<rootDir>/src/app/**/index.ts',
    '!<rootDir>/src/app/**/*.module.ts'
  ],

  coverageDirectory: 'coverage',

  coverageReporters: [
    'lcov',
    'text-summary'
  ],

  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },

  testPathIgnorePatterns: [
    '<rootDir>/.vscode/',
    '<rootDir>/coverage/',
    '<rootDir>/dist/',
    '<rootDir>/e2e/',
    '<rootDir>/node_modules/',
    '<rootDir>/src/app/*.(html|js|scss)$',
    '<rootDir>/(index\.ts)$',
    '<rootDir>/(module\.ts)$'
  ],

  testMatch: [
    '<rootDir>/src/app/*.spec.ts',
    '<rootDir>/src/app/**/*.spec.ts'
  ]
};

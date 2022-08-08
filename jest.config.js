module.exports = {
  preset: 'ts-jest/presets/default-esm',
  moduleFileExtensions: ['ts', 'js'],
  coverageReporters: ['json-summary', 'text', 'lcov'],

  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true,
      },
    ],
  },
  globals: {
    'ts-jest': {},
  },

  testMatch: ['**/*.test.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
}

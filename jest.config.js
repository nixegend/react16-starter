module.exports = {
  verbose: true,
  automock: false,
  testURL: 'http://localhost:3000/',
  setupFilesAfterEnv: ['mock-local-storage'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  testRegex: '(<rootDir>/src/.*|(\\.|/)(test|spec))\\.(js?)$',
  transform: {
    '^.+\\.js?$': 'babel-jest'
  },
  globals: {
    GLOBAL_VM_TYPE: 'test',
    GLOBAL_SETTINGS: JSON.stringify({
      apiPath: '/test/api',
      apiServer: '',
      appPath: 'http://localhost:3000/'
    })
  },
  coverageReporters: ['lcov', 'text', 'text-summary'],
  moduleDirectories: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac)$': '<rootDir>/__mocks__/....js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '^@constants(.*)$': '<rootDir>/src/common/constants$1',
    '^@modules(.*)$': '<rootDir>/src/common/modules$1',
    '^@utils(.*)$': '<rootDir>/src/common/utils$1'
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['js']
};

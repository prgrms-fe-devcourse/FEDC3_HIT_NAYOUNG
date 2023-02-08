export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/cjs/', '/dist/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',

    // '\\assets/.(jpg|jpeg|png)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(jpg|jpeg|png)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|style|less|sass|scss|svg)$': 'identity-obj-proxy',
  },
};

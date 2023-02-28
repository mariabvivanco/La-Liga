export default  {
    moduleDirectories: [
      'node_modules'
    ],
    transform: {
      "\\.tsx?$": "ts-jest",
      "\\.ts?$": "ts-jest",
      "\\.jsx?$": "babel-jest", // if you have jsx tests too
    },
    globals: {
      "ts-jest": {
        "tsConfig": '<rootDir>/tsconfig.json'
      }
    },
    transformIgnorePatterns: [
      "[/\\\\]node_modules[/\\\\](?!lodash-es/).+\\.js$"
    ],
  }
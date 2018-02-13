const NODE_ENV = process.argv.indexOf('production') !== -1 ? 'production' : 'development';
const { resolve } = require('path');

process.env.NODE_ENV = NODE_ENV;

const configs = {
  development: require(resolve(__dirname, './webpack-cfg/dev')),
  production: require(resolve(__dirname, './webpack-cfg/prod')),
};

module.exports = configs[NODE_ENV];

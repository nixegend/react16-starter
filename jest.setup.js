const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const jestFetchMock = require('jest-fetch-mock');

global.fetch = jestFetchMock;
Enzyme.configure({ adapter: new Adapter() });

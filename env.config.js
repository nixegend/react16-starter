module.exports = settings => {
  const config = {
    dev: {
      apiPath: '/api',
      apiServer: 'http://localhost:3000/',
      appPath: `${settings.protocol}://${settings.host}:${settings.port}`
    },

    prod: {
      apiPath: '/api',
      apiServer: '',
      appPath: ''
    },

    stage: {
      apiPath: '/api',
      apiServer: '',
      appPath: ''
    },

    qa: {
      apiPath: '/api',
      apiServer: '',
      appPath: ''
    }
  };

  // test config is located in jest.config.js => GLOBAL_SETTINGS
  return config[settings.vmType];
};

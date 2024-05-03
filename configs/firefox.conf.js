import { config as conf } from '../wdio.conf.js';

export const config = {
  ...conf,
  specs: ["./../test/specs/**/*.js"],
  capabilities: [{
    maxInstances: 1,
    browserName: 'firefox',
    'moz:firefoxOptions': {
      args: ['-headless']
    }
  }]
};
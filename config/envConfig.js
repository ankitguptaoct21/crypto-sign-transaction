const convict = require('convict');

const schema = {
  coin_symbol: {
    doc: 'Symbol of coin in upper case',
    format: ['BTC', 'LTC', 'DASH', 'ETH', 'ETC', 'DOGE', 'BCH'],
    default: 'BTC',
    env: 'COIN',
    arg: 'coin',
  },
  blockchain_environment: {
    doc: 'Blockchain environment configuration',
    format: ['mainnet', 'testnet'],
    default: 'testnet',
    env: 'ENVIRONMENT',
    arg: 'environment',
  },
};

const envConfig = convict(schema);
envConfig.validate({ allowed: 'strict' });

module.exports = envConfig;

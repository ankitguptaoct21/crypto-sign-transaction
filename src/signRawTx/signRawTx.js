const signETHCloneRawTx = require('./signETHCloneUtils');
const signBTCCloneRawTx = require('./signBTCCloneUtils');
const envConfig = require('../../config/envConfig');
const isETHCloneRawTxValid = require('../validate/validateETHCloneRawTx');
const isBTCCloneRawTxValid = require('../validate/validateBTCCloneRawTx');
const networks = require('../networks/networks');

const signRawTx = (rawTx, privateKey, coin, environment) => {
  let signedTxn;
  environment = environment || envConfig.get('blockchain_environment');
  coin = coin || envConfig.get('coin_symbol');

  switch (coin) {
    case 'ETH':
    case 'ETC':
      signedTxn = signETHCloneRawTx(rawTx, privateKey);
      if (!isETHCloneRawTxValid(signedTxn)) {
        throw new Error('Invalid Raw Transaction');
      }
      return signedTxn;
    // for all the bitcoin clones
    default:
      signedTxn = signBTCCloneRawTx(rawTx, coin, environment, privateKey);
      if (!isBTCCloneRawTxValid(signedTxn, networks[coin][environment])) {
        throw new Error('Raw Transaction is invalid.');
      }
      return signedTxn;
  }
}

module.exports = signRawTx;

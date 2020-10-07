const ethUtils = require('ethereumjs-util');
const EthereumTx = require('ethereumjs-tx').Transaction;

const signETHCloneRawTx = (rawTransaction, privateKey) => {
  const privKey = Buffer.from(
    ethUtils.stripHexPrefix(privateKey),
    'hex',
  );
  const tx = new EthereumTx(rawTransaction);
  tx.sign(privKey);
  const serializedTx = tx.serialize();
  return `0x${serializedTx.toString('hex')}`;
}

module.exports = signETHCloneRawTx

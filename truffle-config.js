var HDWalletProvider = require("truffle-hdwallet-provider");
const infuraKey = "7f0de8691966404abb81982dbcfed525";
const mnemonic = "word joke shed pink fringe secret item actress category know erode bachelor";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: '5777'
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // rinkeby's id
      gas: 4500000,        // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000,
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,
      networkCheckTimeout: 10000000,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "^0.6.0"
    }
  }
};

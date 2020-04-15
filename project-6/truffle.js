const HDWalletProvider = require('truffle-hdwallet-provider');
// const infuraKey = "fj4jll3k.....";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();
const mnemonic = 'hover surround echo inner color above anchor patient alcohol heart giggle obvious'

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/68f8b0a660724f6591e553247b2efbcd`),
      network_id: 4,       // rinkeby's id
      // gas: 4500000,        // rinkeby has a lower block limit than mainnet
      gasPrice: 210000000000
    }
  }
};
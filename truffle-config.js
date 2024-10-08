// truffle-config.js
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8546,
      network_id: "5777",
      gas: 6721975
    },
  },
  compilers: {
    solc: {
      version: "0.8.0"
    }
  }
};

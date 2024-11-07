module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost for Ganache
      port: 7545, // Ganache’s default port
      network_id: "*", // Matches any network ID
    },
  },

  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.8.19",
    },
  },

  // Truffle DB settings (optional)
  // db: {
  //   enabled: false,
  // },
};

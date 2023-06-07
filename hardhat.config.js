require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');
const dotenv = require("dotenv");
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
   /* testNetwork: {
      url: process.env.VUE_APP_NETWORK_RPC_URL,
      accounts: [process.env.VUE_APP_PRIVATE_KEY]
    }, */
    localhost: {
      url: "http://127.0.0.1:8545/",
    },
  },
 /* etherscan : {
    apiKey: process.env.VUE_APP_ETHERSCAN_KEY,
  } */
};

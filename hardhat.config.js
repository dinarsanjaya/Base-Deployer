require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    base: {
      url: process.env.BASE_RPC_URL, // Alchemy atau Infura RPC URL
      accounts: [`0x${process.env.PRIVATE_KEY}`] // Private key dari file .env
    }
  }
};

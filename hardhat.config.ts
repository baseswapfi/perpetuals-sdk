import * as dotenv from 'dotenv';
import '@nomicfoundation/hardhat-toolbox';

dotenv.config();

const mainnetFork = {
  url: `${process.env.JSON_RPC_PROVIDER}`,
};

const testnetFork = {
  url: `${process.env.JSON_RPC_PROVIDER}`,
  blockNumber: 12405003, // 11/14/2023 ~6:15PM
};

const config = {
  networks: {
    hardhat: {
      chainId: 84531,
      blockGasLimit: 150_000_000,
      forking: testnetFork,
    },
  },
};

export default config;

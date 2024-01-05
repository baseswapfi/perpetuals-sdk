import * as dotenv from 'dotenv';
import '@nomicfoundation/hardhat-toolbox';

dotenv.config();

const mainnetFork = {
  url: `${process.env.JSON_RPC_PROVIDER}`,
};

const testnetFork = {
  url: `${process.env.JSON_RPC_PROVIDER}`,
  blockNumber: 14633221, // 1/5/2024 ~8:00am
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

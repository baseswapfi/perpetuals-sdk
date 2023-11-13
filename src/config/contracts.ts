import { ChainId } from '@baseswapfi/sdk-core';

export const XGMT_EXCLUDED_ACCOUNTS = [];

const CONTRACTS: { [chainId: number]: { [contractName: string]: string } } = {
  [ChainId.BASE_GOERLI]: {
    Vault: '0xaB1E8868FEe285cF5F379aCF61ae4D65211fc6FE',
    Router: '0x94265f90728993A3f7089049045ceef566A36bB9',
    VaultReader: '0xbE373E10f0c5c9FD2b3207fa5EBe3D1378b33A20',
    Reader: '0x2Cd4DC5B0aB91c1378B2B5Ff9471cDd711Ef765B',
    GlpManager: '0x05339f09375f2E74032617d4e44bd192ce596eCb',
    RewardRouter: '0xf58A23573333AAdF799f9b7A9B95f66B972D3220',
    GlpRewardRouter: '',
    RewardReader: '0xF2eA52d3bD7409bCdA9e5158EF924f5f24f99Ebf',
    NATIVE_TOKEN: '0x4200000000000000000000000000000000000006',
    GLP: '0x688487605ebD93332756a69059324C12c1Ef5e3C',
    GMX: '0x7CF2797a52EcaF8a4a24D9ABe0B22eeDC813e728',
    ES_GMX: '0xF24eF72bF884feE23C2be9364af9631B1Db4F38F',
    BN_GMX: '0xC4D40D1A12525A5AaF3478dc35B703aa86630dF8',
    USDG: '0xba3FeA4Fe91de455164Fb9979B834ce4E11f274b',
    ES_GMX_IOU: '',
    StakedGmxTracker: '0x9C0De41444249fCADDa8700e45734d7628523f50',
    BonusGmxTracker: '0x99687aD0509AbcD493D2076D78C8C3479aDd6A67',
    FeeGmxTracker: '0x14963869592E41a2ecD7524bD213cFC3044AdF75',
    StakedGlpTracker: '0xacB8Ac8d5597A97267e16Dae214eE3F5dBd551BB',
    FeeGlpTracker: '0x4710B12426270D17936Ea61d8314e099062a2C6a',

    StakedGmxDistributor: '0x956610d91F3E8d7620fbaa9Dc0d2FDB8eDD492C9',
    StakedGlpDistributor: '0x4fDBD73aD4B1DDde594BF05497C15f76308eFfb9',

    GmxVester: '0xb0bbb78d7dDD1e8c7c6d0f9B49ED3478B4bdE455',
    GlpVester: '0xDe151D5c92BfAA288Db4B67c21CD55d5826bCc93',

    OrderBook: '0x96E73B10d0f4b7180c7C89456E984dFF6C73EB3f',
    OrderExecutor: '0xc9F21d5986de5f02feeb08ee5CE899CCF5ead3c5',
    OrderBookReader: '0xf5B63b76F638E1798549039c503aA3A47D3d1f9e',

    PositionRouter: '0xcaB83dDe819c3D9C350901FA6cf8819140FAF331',
    PositionManager: '0xaEd85e1D0c7E6e18335B9ea858cE1ab06934eaB5',

    UniswapGmxEthPool: '',
    ReferralStorage: '0x25c3FBEf52115d066B09DC5d2BaA732FC700F005',
    ReferralReader: '0xaf709491f4D1657Ef4Ac93245c370C14e476D273',

    Multicall: '0x0fE9E7B39dbdfe32c9F37FAcCec6b33d290CbF50',
  },
};

export function getContract(chainId: number, name: string): string {
  if (!CONTRACTS[chainId]) {
    throw new Error(`Unknown chainId ${chainId}`);
  }

  if (!CONTRACTS[chainId][name]) {
    throw new Error(`Unknown contract "${name}" for chainId ${chainId}`);
  }

  return CONTRACTS[chainId][name];
}

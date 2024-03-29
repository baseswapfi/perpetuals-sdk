import { sample } from 'lodash';

export const BASE_MAINNET = 8453;
export const BASE_GOERLI = 84531;
export const BCS_MAINNET = 56;
export const BCS_TESTNET = 97;
export const ETH_MAINNET = 1;
export const AVALANCHE = 43114;
export const AVALANCHE_FUJI = 43113;
export const ARBITRUM = 42161;
export const ARBITRUM_GOERLI = 421613;
export const FEES_HIGH_BPS = 50;
export const DEFAULT_ALLOWED_SLIPPAGE_BPS = 30;

const ALCHEMY_WHITELISTED_DOMAINS = ['gmx.io', 'app.gmx.io'];

export const RPC_PROVIDERS = {
  [ETH_MAINNET]: ['https://rpc.ankr.com/eth'],
  [BCS_MAINNET]: [
    'https://bsc-dataseed.binance.org',
    'https://bsc-dataseed1.defibit.io',
    'https://bsc-dataseed1.ninicoin.io',
    'https://bsc-dataseed2.defibit.io',
    'https://bsc-dataseed3.defibit.io',
    'https://bsc-dataseed4.defibit.io',
    'https://bsc-dataseed2.ninicoin.io',
    'https://bsc-dataseed3.ninicoin.io',
    'https://bsc-dataseed4.ninicoin.io',
    'https://bsc-dataseed1.binance.org',
    'https://bsc-dataseed2.binance.org',
    'https://bsc-dataseed3.binance.org',
    'https://bsc-dataseed4.binance.org',
  ],
  [BCS_TESTNET]: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
  [ARBITRUM]: ['https://arb1.arbitrum.io/rpc'],
  [ARBITRUM_GOERLI]: [
    'https://goerli-rollup.arbitrum.io/rpc',
    // "https://endpoints.omniatech.io/v1/arbitrum/goerli/public",
    // "https://arbitrum-goerli.public.blastapi.io",
  ],
  [BASE_MAINNET]: ['https://mainnet.base.org'],
  [BASE_GOERLI]: ['https://goerli.base.org'],
  [AVALANCHE]: ['https://api.avax.network/ext/bc/C/rpc'],
  [AVALANCHE_FUJI]: [
    'https://avalanche-fuji-c-chain.publicnode.com',
    'https://api.avax-test.network/ext/bc/C/rpc',
    // "https://ava-testnet.public.blastapi.io/v1/avax/fuji/public",
    // "https://rpc.ankr.com/avalanche_fuji",
  ],
};

export const FALLBACK_PROVIDERS = {
  [ARBITRUM]: [getAlchemyHttpUrl()],
  [AVALANCHE]: ['https://avax-mainnet.gateway.pokt.network/v1/lb/626f37766c499d003aada23b'],
  [AVALANCHE_FUJI]: [
    'https://endpoints.omniatech.io/v1/avax/fuji/public',
    'https://api.avax-test.network/ext/bc/C/rpc',
    'https://ava-testnet.public.blastapi.io/ext/bc/C/rpc',
  ],
  [ARBITRUM_GOERLI]: ['https://arb-goerli.g.alchemy.com/v2/cZfd99JyN42V9Clbs_gOvA3GSBZH1-1j'],
  [BASE_MAINNET]: ['https://mainnet.base.org'],
  [BASE_GOERLI]: ['https://goerli.base.org'],
};

export function getAlchemyHttpUrl() {
  if (typeof window !== 'undefined' && ALCHEMY_WHITELISTED_DOMAINS.includes(window.location.host)) {
    return 'https://arb-mainnet.g.alchemy.com/v2/RcaXYTizJs51m-w9SnRyDrxSZhE5H9Mf';
  }
  return 'https://arb-mainnet.g.alchemy.com/v2/hxBqIr-vfpJ105JPYLei_ibbJLe66k46';
}

export function getRpcUrl(chainId: number): string | undefined {
  return sample(RPC_PROVIDERS[chainId]);
}

export function getFallbackRpcUrl(chainId: number): string | undefined {
  return sample(FALLBACK_PROVIDERS[chainId]);
}

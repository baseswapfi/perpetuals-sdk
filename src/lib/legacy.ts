import { ethers } from 'ethers';
import { USD_DECIMALS } from './constants';
import { expandDecimals } from './utils';

// use a random placeholder account instead of the zero address as the zero address might have tokens
export const PLACEHOLDER_ACCOUNT = ethers.Wallet.createRandom().address;

export const MIN_PROFIT_TIME = 0;

export const MAX_PRICE_DEVIATION_BASIS_POINTS = 750;
export const DEFAULT_GAS_LIMIT = 1 * 1000 * 1000;
export const SECONDS_PER_YEAR = 31536000;

export const DEPOSIT_FEE = 30;
export const DUST_BNB = '2000000000000000';
export const DUST_USD = expandDecimals(1, USD_DECIMALS);
export const GLP_DECIMALS = 18;
export const GMX_DECIMALS = 18;
export const DEFAULT_MAX_USDG_AMOUNT = expandDecimals(200 * 1000 * 1000, 18);

export const TAX_BASIS_POINTS = 60;
export const STABLE_TAX_BASIS_POINTS = 5;
export const MINT_BURN_FEE_BASIS_POINTS = 25;
export const SWAP_FEE_BASIS_POINTS = 25;
export const STABLE_SWAP_FEE_BASIS_POINTS = 1;
export const MARGIN_FEE_BASIS_POINTS = 10;

export const LIQUIDATION_FEE = expandDecimals(5, USD_DECIMALS);

export const TRADES_PAGE_SIZE = 100;

export const GLP_COOLDOWN_DURATION = 0;
export const THRESHOLD_REDEMPTION_VALUE = expandDecimals(993, 27); // 0.993
export const FUNDING_RATE_PRECISION = 1000000;

export const SWAP = 'Swap';
export const INCREASE = 'Increase';
export const DECREASE = 'Decrease';
export const LONG = 'Long';
export const SHORT = 'Short';

export const MARKET = 'Market';
export const LIMIT = 'Limit';
export const STOP = 'Stop';
export const LEVERAGE_ORDER_OPTIONS = [MARKET, LIMIT, STOP];
export const SWAP_ORDER_OPTIONS = [MARKET, LIMIT];
export const SWAP_OPTIONS = [LONG, SHORT, SWAP];
export const REFERRAL_CODE_QUERY_PARAM = 'ref';
export const MAX_REFERRAL_CODE_LENGTH = 20;

export const MIN_PROFIT_BIPS = 0;

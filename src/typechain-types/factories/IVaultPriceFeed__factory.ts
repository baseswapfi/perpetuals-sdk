/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IVaultPriceFeed,
  IVaultPriceFeedInterface,
} from "../IVaultPriceFeed";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "adjustmentBasisPoints",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "getAmmPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "getLatestPrimaryPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_maximise",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_includeAmmPrice",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_useSwapPricing",
        type: "bool",
      },
    ],
    name: "getPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_maximise",
        type: "bool",
      },
    ],
    name: "getPrimaryPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "isAdjustmentAdditive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isAdditive",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_adjustmentBps",
        type: "uint256",
      },
    ],
    name: "setAdjustment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_favorPrimaryPrice",
        type: "bool",
      },
    ],
    name: "setFavorPrimaryPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_isEnabled",
        type: "bool",
      },
    ],
    name: "setIsAmmEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_isEnabled",
        type: "bool",
      },
    ],
    name: "setIsSecondaryPriceEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxStrictPriceDeviation",
        type: "uint256",
      },
    ],
    name: "setMaxStrictPriceDeviation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_priceSampleSpace",
        type: "uint256",
      },
    ],
    name: "setPriceSampleSpace",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_spreadBasisPoints",
        type: "uint256",
      },
    ],
    name: "setSpreadBasisPoints",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_spreadThresholdBasisPoints",
        type: "uint256",
      },
    ],
    name: "setSpreadThresholdBasisPoints",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_priceFeed",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_priceDecimals",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isStrictStable",
        type: "bool",
      },
    ],
    name: "setTokenConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_useV2Pricing",
        type: "bool",
      },
    ],
    name: "setUseV2Pricing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IVaultPriceFeed__factory {
  static readonly abi = _abi;
  static createInterface(): IVaultPriceFeedInterface {
    return new utils.Interface(_abi) as IVaultPriceFeedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVaultPriceFeed {
    return new Contract(address, _abi, signerOrProvider) as IVaultPriceFeed;
  }
}

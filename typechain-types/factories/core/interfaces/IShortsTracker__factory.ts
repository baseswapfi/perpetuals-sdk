/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IShortsTracker,
  IShortsTrackerInterface,
} from "../../../core/interfaces/IShortsTracker";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "address",
        name: "_collateralToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_indexToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nextPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_sizeDelta",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isIncrease",
        type: "bool",
      },
    ],
    name: "getNextGlobalShortData",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    name: "globalShortAveragePrices",
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
    inputs: [],
    name: "isGlobalShortDataReady",
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
        internalType: "address[]",
        name: "_tokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_averagePrices",
        type: "uint256[]",
      },
    ],
    name: "setInitData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "value",
        type: "bool",
      },
    ],
    name: "setIsGlobalShortDataReady",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "address",
        name: "_collateralToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_indexToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isLong",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_sizeDelta",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_markPrice",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isIncrease",
        type: "bool",
      },
    ],
    name: "updateGlobalShortData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IShortsTracker__factory {
  static readonly abi = _abi;
  static createInterface(): IShortsTrackerInterface {
    return new utils.Interface(_abi) as IShortsTrackerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IShortsTracker {
    return new Contract(address, _abi, signerOrProvider) as IShortsTracker;
  }
}

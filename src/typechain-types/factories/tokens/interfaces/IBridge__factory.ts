/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IBridge,
  IBridgeInterface,
} from "../../../tokens/interfaces/IBridge";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "unwrap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "wrap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IBridge__factory {
  static readonly abi = _abi;
  static createInterface(): IBridgeInterface {
    return new utils.Interface(_abi) as IBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBridge {
    return new Contract(address, _abi, signerOrProvider) as IBridge;
  }
}
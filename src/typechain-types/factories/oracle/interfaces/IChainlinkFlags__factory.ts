/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IChainlinkFlags,
  IChainlinkFlagsInterface,
} from "../../../oracle/interfaces/IChainlinkFlags";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "getFlag",
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
] as const;

export class IChainlinkFlags__factory {
  static readonly abi = _abi;
  static createInterface(): IChainlinkFlagsInterface {
    return new utils.Interface(_abi) as IChainlinkFlagsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IChainlinkFlags {
    return new Contract(address, _abi, signerOrProvider) as IChainlinkFlags;
  }
}

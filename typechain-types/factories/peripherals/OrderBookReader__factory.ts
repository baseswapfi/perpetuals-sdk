/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  OrderBookReader,
  OrderBookReaderInterface,
} from "../../peripherals/OrderBookReader";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_orderBookAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_indices",
        type: "uint256[]",
      },
    ],
    name: "getDecreaseOrders",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_orderBookAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_indices",
        type: "uint256[]",
      },
    ],
    name: "getIncreaseOrders",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_orderBookAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_indices",
        type: "uint256[]",
      },
    ],
    name: "getSwapOrders",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610e27806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630ce933b9146100465780632e18146914610199578063c38ccd5014610253575b600080fd5b6101006004803603606081101561005c57600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b81111561008f57600080fd5b8201836020820111156100a157600080fd5b803590602001918460208302840111600160201b831117156100c257600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061030d945050505050565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561014457818101518382015260200161012c565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561018357818101518382015260200161016b565b5050505090500194505050505060405180910390f35b610100600480360360608110156101af57600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b8111156101e257600080fd5b8201836020820111156101f457600080fd5b803590602001918460208302840111600160201b8311171561021557600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610675945050505050565b6101006004803603606081101561026957600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b81111561029c57600080fd5b8201836020820111156102ae57600080fd5b803590602001918460208302840111600160201b831117156102cf57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610a17945050505050565b606080610318610db9565b6040518060a001604052806000815260200160008152602001866001600160a01b031681526020016005815260200160028152509050606084518260600151026001600160401b038111801561036d57600080fd5b50604051908082528060200260200182016040528015610397578160200160208202803683370190505b509050606085518360800151026001600160401b03811180156103b957600080fd5b506040519080825280602002602001820160405280156103e3578160200160208202803683370190505b509050875b865184511015610667578684600001518151811061040257fe5b60200260200101518460200181815250506000806000806000806000876001600160a01b031663026032ee8c604001518d602001516040518363ffffffff1660e01b815260040180836001600160a01b03168152602001828152602001925050506101006040518083038186803b15801561047c57600080fd5b505afa158015610490573d6000803e3d6000fd5b505050506040513d6101008110156104a757600080fd5b810190808051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190505050509650965096509650965096509650858a8c606001518d60000151028151811061052457fe5b602002602001018181525050838a8c606001518d60000151026001018151811061054a57fe5b60200260200101818152505082610562576000610565565b60015b60ff168a8c606001518d60000151026002018151811061058157fe5b602002602001018181525050818a8c606001518d6000015102600301815181106105a757fe5b602002602001018181525050806105bf5760006105c2565b60015b60ff168a8c606001518d6000015102600401815181106105de57fe5b60200260200101818152505086898c608001518d60000151028151811061060157fe5b60200260200101906001600160a01b031690816001600160a01b03168152505084898c608001518d60000151026001018151811061063b57fe5b6001600160a01b0390921660209283029190910190910152505088516001018952506103e89350505050565b509097909650945050505050565b606080610680610db9565b6040518060a001604052806000815260200160008152602001866001600160a01b031681526020016005815260200160038152509050606084518260600151026001600160401b03811180156106d557600080fd5b506040519080825280602002602001820160405280156106ff578160200160208202803683370190505b509050606085518360800151026001600160401b038111801561072157600080fd5b5060405190808252806020026020018201604052801561074b578160200160208202803683370190505b509050875b865184511015610667578684600001518151811061076a57fe5b6020026020010151846020018181525050600080600080600080600080886001600160a01b031663d0d40cd68d604001518e602001516040518363ffffffff1660e01b815260040180836001600160a01b03168152602001828152602001925050506101206040518083038186803b1580156107e557600080fd5b505afa1580156107f9573d6000803e3d6000fd5b505050506040513d61012081101561081057600080fd5b810190808051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291905050505097509750975097509750975097509750848b8d606001518e60000151028151811061089957fe5b602002602001018181525050838b8d606001518e6000015102600101815181106108bf57fe5b602002602001018181525050828b8d606001518e6000015102600201815181106108e557fe5b602002602001018181525050816108fd576000610900565b60015b60ff168b8d606001518e60000151026003018151811061091c57fe5b60200260200101818152505080610934576000610937565b60015b60ff168b8d606001518e60000151026004018151811061095357fe5b602002602001018181525050878a8d608001518e60000151028151811061097657fe5b60200260200101906001600160a01b031690816001600160a01b031681525050868a8d608001518e6000015102600101815181106109b057fe5b60200260200101906001600160a01b031690816001600160a01b031681525050858a8d608001518e6000015102600201815181106109ea57fe5b6001600160a01b0390921660209283029190910190910152505089516001018a5250610750945050505050565b606080610a22610db9565b6040518060a001604052806000815260200160008152602001866001600160a01b031681526020016005815260200160038152509050606084518260600151026001600160401b0381118015610a7757600080fd5b50604051908082528060200260200182016040528015610aa1578160200160208202803683370190505b509050606085518360800151026001600160401b0381118015610ac357600080fd5b50604051908082528060200260200182016040528015610aed578160200160208202803683370190505b509050875b8651845110156106675786846000015181518110610b0c57fe5b6020026020010151846020018181525050600080600080600080600080886001600160a01b031663d3bab1d18d604001518e602001516040518363ffffffff1660e01b815260040180836001600160a01b03168152602001828152602001925050506101206040518083038186803b158015610b8757600080fd5b505afa158015610b9b573d6000803e3d6000fd5b505050506040513d610120811015610bb257600080fd5b810190808051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291905050505097509750975097509750975097509750868b8d606001518e600001510281518110610c3b57fe5b602002602001018181525050838b8d606001518e600001510260010181518110610c6157fe5b60200260200101818152505082610c79576000610c7c565b60015b60ff168b8d606001518e600001510260020181518110610c9857fe5b602002602001018181525050818b8d606001518e600001510260030181518110610cbe57fe5b60200260200101818152505080610cd6576000610cd9565b60015b60ff168b8d606001518e600001510260040181518110610cf557fe5b602002602001018181525050878a8d608001518e600001510281518110610d1857fe5b60200260200101906001600160a01b031690816001600160a01b031681525050858a8d608001518e600001510260010181518110610d5257fe5b60200260200101906001600160a01b031690816001600160a01b031681525050848a8d608001518e600001510260020181518110610d8c57fe5b6001600160a01b0390921660209283029190910190910152505089516001018a5250610af2945050505050565b6040518060a00160405280600081526020016000815260200160006001600160a01b031681526020016000815260200160008152509056fea26469706673582212202f9df99c49180b57515b839acf1123d0bd2301929e539daf516e280e1744270464736f6c634300060c0033";

type OrderBookReaderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OrderBookReaderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OrderBookReader__factory extends ContractFactory {
  constructor(...args: OrderBookReaderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OrderBookReader> {
    return super.deploy(overrides || {}) as Promise<OrderBookReader>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OrderBookReader {
    return super.attach(address) as OrderBookReader;
  }
  override connect(signer: Signer): OrderBookReader__factory {
    return super.connect(signer) as OrderBookReader__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OrderBookReaderInterface {
    return new utils.Interface(_abi) as OrderBookReaderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OrderBookReader {
    return new Contract(address, _abi, signerOrProvider) as OrderBookReader;
  }
}

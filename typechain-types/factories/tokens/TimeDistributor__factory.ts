/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  TimeDistributor,
  TimeDistributorInterface,
} from "../../tokens/TimeDistributor";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Distribute",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "rewardToken",
        type: "address",
      },
    ],
    name: "DistributionChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensPerIntervalChange",
    type: "event",
  },
  {
    inputs: [],
    name: "DISTRIBUTION_INTERVAL",
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
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "distribute",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "getDistributionAmount",
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
        name: "_receiver",
        type: "address",
      },
    ],
    name: "getIntervals",
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
        name: "_receiver",
        type: "address",
      },
    ],
    name: "getRewardToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gov",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastDistributionTime",
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
        name: "",
        type: "address",
      },
    ],
    name: "rewardTokens",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_receivers",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "_rewardTokens",
        type: "address[]",
      },
    ],
    name: "setDistribution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gov",
        type: "address",
      },
    ],
    name: "setGov",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setTokensPerInterval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokensPerInterval",
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
        name: "_receiver",
        type: "address",
      },
    ],
    name: "updateLastDistributionTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060008054336001600160a01b03199182168117835560018054909216179055610ef090819061004090396000f3fe608060405234801561001057600080fd5b50600436106100ba5760003560e01c806308b26b75146100bf57806312d43a51146100d957806319f7ab45146100fd578063270da2401461012557806341d0204b1461014b578063770788721461025957806383b3dd241461027f578063847ec40c146102ab578063b7fba9f6146102d1578063c27a1acd146102f7578063cfad57a21461031d578063e4fc6b6d14610343578063f5ab16cc1461034b578063f851a44014610371575b600080fd5b6100c7610379565b60408051918252519081900360200190f35b6100e161037f565b604080516001600160a01b039092168252519081900360200190f35b6101236004803603602081101561011357600080fd5b50356001600160a01b031661038e565b005b6100c76004803603602081101561013b57600080fd5b50356001600160a01b03166103e7565b6101236004803603606081101561016157600080fd5b810190602081018135600160201b81111561017b57600080fd5b82018360208201111561018d57600080fd5b803590602001918460208302840111600160201b831117156101ae57600080fd5b919390929091602081019035600160201b8111156101cb57600080fd5b8201836020820111156101dd57600080fd5b803590602001918460208302840111600160201b831117156101fe57600080fd5b919390929091602081019035600160201b81111561021b57600080fd5b82018360208201111561022d57600080fd5b803590602001918460208302840111600160201b8311171561024e57600080fd5b5090925090506103f9565b6100e16004803603602081101561026f57600080fd5b50356001600160a01b03166105ba565b6101236004803603604081101561029557600080fd5b506001600160a01b0381351690602001356105db565b6100c7600480360360208110156102c157600080fd5b50356001600160a01b03166106fe565b6100c7600480360360208110156102e757600080fd5b50356001600160a01b0316610710565b6100c76004803603602081101561030d57600080fd5b50356001600160a01b03166107f3565b6101236004803603602081101561033357600080fd5b50356001600160a01b031661082e565b6100c761089d565b6100e16004803603602081101561036157600080fd5b50356001600160a01b0316610955565b6100e1610970565b610e1081565b6000546001600160a01b031681565b6001546001600160a01b031633146103db576040805162461bcd60e51b815260206004820152601a6024820152600080516020610e71833981519152604482015290519081900360640190fd5b6103e48161097f565b50565b60036020526000908152604090205481565b6000546001600160a01b03163314610446576040805162461bcd60e51b815260206004820152601a6024820152600080516020610e71833981519152604482015290519081900360640190fd5b60005b858110156105b157600087878381811061045f57fe5b905060200201356001600160a01b0316905060046000826001600160a01b03166001600160a01b03168152602001908152602001600020546000146104ea5760006104a9826107f3565b905080156104e85760405162461bcd60e51b8152600401808060200182810382526025815260200180610e4c6025913960400191505060405180910390fd5b505b60008686848181106104f857fe5b905060200201359050600085858581811061050f57fe5b6001600160a01b0386811660009081526003602090815260408083208990556002825290912080546001600160a01b03191691909302949094013516928317905550905061055c8361097f565b604080516001600160a01b0380861682526020820185905283168183015290517fabc51c16142cb4f85965fa5b3cfdeed4475e4751d9201718a2bfc334c152f6149181900360600190a1505050600101610449565b50505050505050565b6001600160a01b03808216600090815260026020526040902054165b919050565b6001546001600160a01b03163314610628576040805162461bcd60e51b815260206004820152601a6024820152600080516020610e71833981519152604482015290519081900360640190fd5b6001600160a01b03821660009081526004602052604090205415610692576000610651836107f3565b905080156106905760405162461bcd60e51b8152600401808060200182810382526025815260200180610e4c6025913960400191505060405180910390fd5b505b6001600160a01b03821660009081526003602052604090208190556106b68261097f565b604080516001600160a01b03841681526020810183905281517f83a9322775b48550bbef762b82384c8ed0b747ff4c37188bd3bb72e3c7cca823929181900390910190a15050565b60046020526000908152604090205481565b6001600160a01b038116600090815260036020526040812054806107385760009150506105d6565b6000610743846107f3565b9050600061075183836109b1565b6001600160a01b038087166000908152600260209081526040918290205482516370a0823160e01b8152306004820152925194955085949316926370a08231926024808201939291829003018186803b1580156107ad57600080fd5b505afa1580156107c1573d6000803e3d6000fd5b505050506040513d60208110156107d757600080fd5b505110156107eb57600093505050506105d6565b949350505050565b6001600160a01b0381166000908152600460205260408120548190610819904290610a13565b905061082781610e10610a55565b9392505050565b6000546001600160a01b0316331461087b576040805162461bcd60e51b815260206004820152601a6024820152600080516020610e71833981519152604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b600033816108aa826107f3565b9050806108bc57600092505050610952565b60006108c783610710565b90506108d28361097f565b806108e35760009350505050610952565b6001600160a01b0380841660009081526002602052604090205461090991168483610a94565b604080516001600160a01b03851681526020810183905281517fc1d32ad5cca423e7dda2123dbf8c482f8e77d00b631c06e903a47f2cec1334df929181900390910190a1925050505b90565b6002602052600090815260409020546001600160a01b031681565b6001546001600160a01b031681565b610995610e1061098f4282610a55565b906109b1565b6001600160a01b03909116600090815260046020526040902055565b6000826109c057506000610a0d565b828202828482816109cd57fe5b0414610a0a5760405162461bcd60e51b8152600401808060200182810382526021815260200180610e2b6021913960400191505060405180910390fd5b90505b92915050565b6000610a0a83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610aeb565b6000610a0a83836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b815250610b82565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610ae6908490610be7565b505050565b60008184841115610b7a5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610b3f578181015183820152602001610b27565b50505050905090810190601f168015610b6c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008183610bd15760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610b3f578181015183820152602001610b27565b506000838581610bdd57fe5b0495945050505050565b6060610c3c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610c989092919063ffffffff16565b805190915015610ae657808060200190516020811015610c5b57600080fd5b5051610ae65760405162461bcd60e51b815260040180806020018281038252602a815260200180610e91602a913960400191505060405180910390fd5b60606107eb848460008585610cac85610dbe565b610cfd576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310610d3c5780518252601f199092019160209182019101610d1d565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610d9e576040519150601f19603f3d011682016040523d82523d6000602084013e610da3565b606091505b5091509150610db3828286610dc4565b979650505050505050565b3b151590565b60608315610dd3575081610827565b825115610de35782518084602001fd5b60405162461bcd60e51b8152602060048201818152845160248401528451859391928392604401919085019080838360008315610b3f578181015183820152602001610b2756fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7754696d654469737472696275746f723a2070656e64696e6720646973747269627574696f6e54696d654469737472696275746f723a20666f7262696464656e0000000000005361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220e27eedc4933316b9ce3a65c36ade05ec2038b82d085495cc1d6bbbe40868fcbb64736f6c634300060c0033";

type TimeDistributorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimeDistributorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TimeDistributor__factory extends ContractFactory {
  constructor(...args: TimeDistributorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TimeDistributor> {
    return super.deploy(overrides || {}) as Promise<TimeDistributor>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TimeDistributor {
    return super.attach(address) as TimeDistributor;
  }
  override connect(signer: Signer): TimeDistributor__factory {
    return super.connect(signer) as TimeDistributor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimeDistributorInterface {
    return new utils.Interface(_abi) as TimeDistributorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimeDistributor {
    return new Contract(address, _abi, signerOrProvider) as TimeDistributor;
  }
}

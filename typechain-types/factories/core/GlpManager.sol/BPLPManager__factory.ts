/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  BPLPManager,
  BPLPManagerInterface,
} from "../../../core/GlpManager.sol/BPLPManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usdg",
        type: "address",
      },
      {
        internalType: "address",
        name: "_glp",
        type: "address",
      },
      {
        internalType: "address",
        name: "_shortsTracker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_cooldownDuration",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
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
        internalType: "uint256",
        name: "aumInUsdg",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "glpSupply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "usdgAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mintAmount",
        type: "uint256",
      },
    ],
    name: "AddLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "glpAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "aumInUsdg",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "glpSupply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "usdgAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "RemoveLiquidity",
    type: "event",
  },
  {
    inputs: [],
    name: "BASIS_POINTS_DIVISOR",
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
    name: "GLP_PRECISION",
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
    name: "MAX_COOLDOWN_DURATION",
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
    name: "PRICE_PRECISION",
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
    name: "USDG_DECIMALS",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minUsdg",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minGlp",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
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
        name: "_fundingAccount",
        type: "address",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minUsdg",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minGlp",
        type: "uint256",
      },
    ],
    name: "addLiquidityForAccount",
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
    inputs: [],
    name: "aumAddition",
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
    name: "aumDeduction",
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
    name: "cooldownDuration",
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
        internalType: "bool",
        name: "maximise",
        type: "bool",
      },
    ],
    name: "getAum",
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
        internalType: "bool",
        name: "maximise",
        type: "bool",
      },
    ],
    name: "getAumInUsdg",
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
    name: "getAums",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
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
    name: "getGlobalShortAveragePrice",
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
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_size",
        type: "uint256",
      },
    ],
    name: "getGlobalShortDelta",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
        internalType: "bool",
        name: "_maximise",
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
    inputs: [],
    name: "glp",
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
    inputs: [],
    name: "inPrivateMode",
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
        name: "",
        type: "address",
      },
    ],
    name: "isHandler",
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
        name: "",
        type: "address",
      },
    ],
    name: "lastAddedAt",
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
        name: "_tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_glpAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "removeLiquidity",
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
        name: "_account",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_glpAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "removeLiquidityForAccount",
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
        internalType: "uint256",
        name: "_aumAddition",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_aumDeduction",
        type: "uint256",
      },
    ],
    name: "setAumAdjustment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cooldownDuration",
        type: "uint256",
      },
    ],
    name: "setCooldownDuration",
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
        name: "_handler",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isActive",
        type: "bool",
      },
    ],
    name: "setHandler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_inPrivateMode",
        type: "bool",
      },
    ],
    name: "setInPrivateMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IShortsTracker",
        name: "_shortsTracker",
        type: "address",
      },
    ],
    name: "setShortsTracker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_shortsTrackerAveragePriceWeight",
        type: "uint256",
      },
    ],
    name: "setShortsTrackerAveragePriceWeight",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "shortsTracker",
    outputs: [
      {
        internalType: "contract IShortsTracker",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "shortsTrackerAveragePriceWeight",
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
    name: "usdg",
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
    name: "vault",
    outputs: [
      {
        internalType: "contract IVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051612666380380612666833981810160405260a081101561003357600080fd5b5080516020820151604083015160608401516080909401516001600081905580546001600160a01b031990811633908117821617909155600280546001600160a01b0396871690831617905560048054948616948216949094179093556005805492851692841692909217909155600380549390941692909116919091179091556006556125a0806100c66000396000f3fe608060405234801561001057600080fd5b50600436106101965760003560e01c8063033914761461019b578063070eacee146101cc578063126082cf146101e857806312d43a51146101f057806317eb2a1514610214578063196b68cb1461025c5780631e9049cf146102645780631ece366a1461026c57806335269315146102a4578063440d828a146102ac57806346ea87af146102d25780634f5f6b5e146102f857806364e6617f14610317578063657bc5d01461031f578063662f1c681461032757806368a0a3e01461032f5780636a86da191461034e57806371d597ad1461036d57806378a207ee146103b1578063870d917c146103b95780638b770e11146103c15780638fed0b2c146103e75780639116c4ae1461042157806395082d2514610444578063966be0751461044c5780639cb7de4b14610469578063a1acd3d514610497578063b172bb0c146104e2578063cfad57a2146104ea578063d34ee09314610510578063e245b5af14610536578063ed0d1c0414610555578063f5b91b7b146105ad578063fbfa77cf146105b5575b600080fd5b6101ba600480360360208110156101b157600080fd5b503515156105bd565b60408051918252519081900360200190f35b6101d4610c3b565b604080519115158252519081900360200190f35b6101ba610c44565b6101f8610c4a565b604080516001600160a01b039092168252519081900360200190f35b6101ba600480360360c081101561022a57600080fd5b506001600160a01b03813581169160208101358216916040820135169060608101359060808101359060a00135610c59565b6101ba610ccc565b6101ba610cd2565b6101ba6004803603608081101561028257600080fd5b506001600160a01b038135169060208101359060408101359060600135610cd9565b6101ba610d88565b6101ba600480360360208110156102c257600080fd5b50356001600160a01b0316610d8e565b6101d4600480360360208110156102e857600080fd5b50356001600160a01b031661109f565b6103156004803603602081101561030e57600080fd5b50356110b4565b005b6101ba61115d565b6101f8611163565b6101ba611172565b6101ba6004803603602081101561034557600080fd5b5035151561117e565b6103156004803603602081101561036457600080fd5b503515156111b5565b6101ba600480360360a081101561038357600080fd5b506001600160a01b038135811691602081013582169160408201359160608101359160809091013516611215565b6101f8611286565b6101ba611295565b6101ba600480360360208110156103d757600080fd5b50356001600160a01b031661129a565b6101ba600480360360808110156103fd57600080fd5b506001600160a01b03813581169160208101359160408201359160600135166112ac565b6103156004803603604081101561043757600080fd5b508035906020013561134c565b6101ba6113a4565b6103156004803603602081101561046257600080fd5b50356113b4565b6103156004803603604081101561047f57600080fd5b506001600160a01b0381351690602001351515611448565b6104c9600480360360608110156104ad57600080fd5b506001600160a01b0381351690602081013590604001356114c0565b6040805192835290151560208301528051918290030190f35b6101ba611514565b6103156004803603602081101561050057600080fd5b50356001600160a01b031661151a565b6103156004803603602081101561052657600080fd5b50356001600160a01b0316611589565b6101ba6004803603602081101561054c57600080fd5b503515156115f8565b61055d6116a2565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610599578181015183820152602001610581565b505050509050019250505060405180910390f35b6101f8611710565b6101f861171f565b600080600260009054906101000a90046001600160a01b03166001600160a01b0316630842b0766040518163ffffffff1660e01b815260040160206040518083038186803b15801561060e57600080fd5b505afa158015610622573d6000803e3d6000fd5b505050506040513d602081101561063857600080fd5b5051600854600254919250906000906001600160a01b0316815b84811015610bf45760025460408051630e468baf60e41b81526004810184905290516000926001600160a01b03169163e468baf0916024808301926020929190829003018186803b1580156106a657600080fd5b505afa1580156106ba573d6000803e3d6000fd5b505050506040513d60208110156106d057600080fd5b505160025460408051630daf9c2160e41b81526001600160a01b0380851660048301529151939450600093919092169163daf9c210916024808301926020929190829003018186803b15801561072557600080fd5b505afa158015610739573d6000803e3d6000fd5b505050506040513d602081101561074f57600080fd5b505190508061075f575050610bec565b6000896107e457846001600160a01b03166381a612d6846040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156107b357600080fd5b505afa1580156107c7573d6000803e3d6000fd5b505050506040513d60208110156107dd57600080fd5b505161085e565b846001600160a01b031663e124e6d2846040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561083157600080fd5b505afa158015610845573d6000803e3d6000fd5b505050506040513d602081101561085b57600080fd5b50515b90506000856001600160a01b03166352f55eed856040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156108af57600080fd5b505afa1580156108c3573d6000803e3d6000fd5b505050506040513d60208110156108d957600080fd5b5051604080516323b95ceb60e21b81526001600160a01b038781166004830152915192935060009291891691638ee573ac91602480820192602092909190829003018186803b15801561092b57600080fd5b505afa15801561093f573d6000803e3d6000fd5b505050506040513d602081101561095557600080fd5b5051604080516342b60b0360e01b81526001600160a01b0388811660048301529151929350908916916342b60b0391602480820192602092909190829003018186803b1580156109a457600080fd5b505afa1580156109b8573d6000803e3d6000fd5b505050506040513d60208110156109ce57600080fd5b5051156109fe576109f76109f0600a83900a6109ea858761172e565b90611790565b8a906117cf565b9850610be6565b6000876001600160a01b0316638a78daa8876040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610a4d57600080fd5b505afa158015610a61573d6000803e3d6000fd5b505050506040513d6020811015610a7757600080fd5b505190508015610ab957600080610a8f8887856114c0565b9150915080610aa957610aa28c836117cf565b9b50610ab6565b610ab38b836117cf565b9a505b50505b610b3c886001600160a01b031663f07456ce886040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610b0957600080fd5b505afa158015610b1d573d6000803e3d6000fd5b505050506040513d6020811015610b3357600080fd5b50518b906117cf565b99506000886001600160a01b031663c3c7b9e9886040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610b8d57600080fd5b505afa158015610ba1573d6000803e3d6000fd5b505050506040513d6020811015610bb757600080fd5b50519050610be1610bda600a85900a6109ea88610bd48987611827565b9061172e565b8c906117cf565b9a5050505b50505050505b600101610652565b50828211610c0b57610c068383611827565b610c0e565b60005b92508260095411610c2c57600954610c27908490611827565b610c2f565b60005b9450505050505b919050565b600a5460ff1681565b61271081565b6001546001600160a01b031681565b600060026000541415610ca1576040805162461bcd60e51b815260206004820152601f6024820152600080516020612424833981519152604482015290519081900360640190fd5b6002600055610cae611869565b610cbc8787878787876118c8565b6001600055979650505050505050565b60085481565b6202a30081565b600060026000541415610d21576040805162461bcd60e51b815260206004820152601f6024820152600080516020612424833981519152604482015290519081900360640190fd5b6002600055600a5460ff1615610d6c576040805162461bcd60e51b815260206004820152601f6024820152600080516020612464833981519152604482015290519081900360640190fd5b610d7a3333878787876118c8565b600160005595945050505050565b60065481565b6003546000906001600160a01b0316801580610e0c5750806001600160a01b0316639a11178f6040518163ffffffff1660e01b815260040160206040518083038186803b158015610dde57600080fd5b505afa158015610df2573d6000803e3d6000fd5b505050506040513d6020811015610e0857600080fd5b5051155b15610e935760025460408051636274980360e01b81526001600160a01b038681166004830152915191909216916362749803916024808301926020929190829003018186803b158015610e5e57600080fd5b505afa158015610e72573d6000803e3d6000fd5b505050506040513d6020811015610e8857600080fd5b50519150610c369050565b600b5480610f1e5760025460408051636274980360e01b81526001600160a01b038781166004830152915191909216916362749803916024808301926020929190829003018186803b158015610ee857600080fd5b505afa158015610efc573d6000803e3d6000fd5b505050506040513d6020811015610f1257600080fd5b50519250610c36915050565b612710811415610f7557816001600160a01b03166362749803856040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610ee857600080fd5b60025460408051636274980360e01b81526001600160a01b03878116600483015291516000939290921691636274980391602480820192602092909190829003018186803b158015610fc657600080fd5b505afa158015610fda573d6000803e3d6000fd5b505050506040513d6020811015610ff057600080fd5b505160408051636274980360e01b81526001600160a01b038881166004830152915192935060009291861691636274980391602480820192602092909190829003018186803b15801561104257600080fd5b505afa158015611056573d6000803e3d6000fd5b505050506040513d602081101561106c57600080fd5b50519050610c2f6127106109ea611083848761172e565b61109961109261271089611827565b879061172e565b906117cf565b600c6020526000908152604090205460ff1681565b6001546001600160a01b03163314611101576040805162461bcd60e51b81526020600482015260156024820152600080516020612444833981519152604482015290519081900360640190fd5b612710600b541115611158576040805162461bcd60e51b815260206004820152601b60248201527a1094131413585b9859d95c8e881a5b9d985b1a59081dd95a59da1d602a1b604482015290519081900360640190fd5b600b55565b600b5481565b6003546001600160a01b031681565b670de0b6b3a764000081565b60008061118a836105bd565b90506111ae68327cb2734119d3b7a9601e1b6109ea83670de0b6b3a764000061172e565b9392505050565b6001546001600160a01b03163314611202576040805162461bcd60e51b81526020600482015260156024820152600080516020612444833981519152604482015290519081900360640190fd5b600a805460ff1916911515919091179055565b60006002600054141561125d576040805162461bcd60e51b815260206004820152601f6024820152600080516020612424833981519152604482015290519081900360640190fd5b600260005561126a611869565b6112778686868686611be2565b60016000559695505050505050565b6005546001600160a01b031681565b601281565b60076020526000908152604090205481565b6000600260005414156112f4576040805162461bcd60e51b815260206004820152601f6024820152600080516020612424833981519152604482015290519081900360640190fd5b6002600055600a5460ff161561133f576040805162461bcd60e51b815260206004820152601f6024820152600080516020612464833981519152604482015290519081900360640190fd5b610d7a3386868686611be2565b6001546001600160a01b03163314611399576040805162461bcd60e51b81526020600482015260156024820152600080516020612444833981519152604482015290519081900360640190fd5b600891909155600955565b68327cb2734119d3b7a9601e1b81565b6001546001600160a01b03163314611401576040805162461bcd60e51b81526020600482015260156024820152600080516020612444833981519152604482015290519081900360640190fd5b6202a3008111156114435760405162461bcd60e51b81526004018080602001828103825260268152602001806125456026913960400191505060405180910390fd5b600655565b6001546001600160a01b03163314611495576040805162461bcd60e51b81526020600482015260156024820152600080516020612444833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152600c60205260409020805460ff1916911515919091179055565b60008060006114ce86610d8e565b905060008582116114e8576114e38683611827565b6114f2565b6114f28287611827565b90506000611504836109ea888561172e565b9450505084109050935093915050565b60095481565b6001546001600160a01b03163314611567576040805162461bcd60e51b81526020600482015260156024820152600080516020612444833981519152604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b031633146115d6576040805162461bcd60e51b81526020600482015260156024820152600080516020612444833981519152604482015290519081900360640190fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b600080611604836105bd565b90506000600560009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561165657600080fd5b505afa15801561166a573d6000803e3d6000fd5b505050506040513d602081101561168057600080fd5b5051905061169a816109ea84670de0b6b3a764000061172e565b949350505050565b6040805160028082526060808301845292839291906020830190803683370190505090506116d060016105bd565b816000815181106116dd57fe5b6020026020010181815250506116f360006105bd565b8160018151811061170057fe5b6020908102919091010152905090565b6004546001600160a01b031681565b6002546001600160a01b031681565b60008261173d5750600061178a565b8282028284828161174a57fe5b04146117875760405162461bcd60e51b81526004018080602001828103825260218152602001806124fa6021913960400191505060405180910390fd5b90505b92915050565b600061178783836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b81525061207f565b600082820183811015611787576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b600061178783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612121565b336000908152600c602052604090205460ff166118c6576040805162461bcd60e51b81526020600482015260166024820152752128262826b0b730b3b2b91d103337b93134b23232b760511b604482015290519081900360640190fd5b565b600080841161191d576040805162461bcd60e51b815260206004820152601c60248201527b1094131413585b9859d95c8e881a5b9d985b1a590817d85b5bdd5b9d60221b604482015290519081900360640190fd5b6000611929600161117e565b90506000600560009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561197b57600080fd5b505afa15801561198f573d6000803e3d6000fd5b505050506040513d60208110156119a557600080fd5b50516002549091506119c6906001600160a01b03898116918c91168961217b565b6002546040805163817bb85760e01b81526001600160a01b038a811660048301523060248301529151600093929092169163817bb8579160448082019260209290919082900301818787803b158015611a1e57600080fd5b505af1158015611a32573d6000803e3d6000fd5b505050506040513d6020811015611a4857600080fd5b5051905085811015611a8b5760405162461bcd60e51b81526004018080602001828103825260258152602001806124846025913960400191505060405180910390fd5b60008315611aa657611aa1846109ea848661172e565b611aa8565b815b905085811015611ae95760405162461bcd60e51b81526004018080602001828103825260248152602001806124a96024913960400191505060405180910390fd5b600554604080516340c10f1960e01b81526001600160a01b038d8116600483015260248201859052915191909216916340c10f1991604480830192600092919082900301818387803b158015611b3e57600080fd5b505af1158015611b52573d6000803e3d6000fd5b5050506001600160a01b03808c166000818152600760209081526040918290204290558151928352928d16928201929092528082018b9052606081018790526080810186905260a0810185905260c0810184905290517f38dc38b96482be64113daffd8d464ebda93e856b70ccfc605e69ccf892ab981e92509081900360e00190a19a9950505050505050505050565b6000808411611c38576040805162461bcd60e51b815260206004820152601f60248201527f42504c504d616e616765723a20696e76616c6964205f676c70416d6f756e7400604482015290519081900360640190fd5b6006546001600160a01b0387166000908152600760205260409020544291611c6091906117cf565b1115611c9d5760405162461bcd60e51b815260040180806020018281038252602d8152602001806124cd602d913960400191505060405180910390fd5b6000611ca9600061117e565b90506000600560009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015611cfb57600080fd5b505afa158015611d0f573d6000803e3d6000fd5b505050506040513d6020811015611d2557600080fd5b505190506000611d39826109ea898661172e565b60048054604080516370a0823160e01b81523093810193909352519293506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b158015611d8b57600080fd5b505afa158015611d9f573d6000803e3d6000fd5b505050506040513d6020811015611db557600080fd5b5051905080821115611e3c576004546001600160a01b03166340c10f1930611ddd8585611827565b6040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015611e2357600080fd5b505af1158015611e37573d6000803e3d6000fd5b505050505b60055460408051632770a7eb60e21b81526001600160a01b038d81166004830152602482018c905291519190921691639dc29fac91604480830192600092919082900301818387803b158015611e9157600080fd5b505af1158015611ea5573d6000803e3d6000fd5b5050600480546002546040805163a9059cbb60e01b81526001600160a01b039283169481019490945260248401889052519116935063a9059cbb925060448083019260209291908290030181600087803b158015611f0257600080fd5b505af1158015611f16573d6000803e3d6000fd5b505050506040513d6020811015611f2c57600080fd5b505060025460408051630711e61960e41b81526001600160a01b038c8116600483015289811660248301529151600093929092169163711e61909160448082019260209290919082900301818787803b158015611f8857600080fd5b505af1158015611f9c573d6000803e3d6000fd5b505050506040513d6020811015611fb257600080fd5b505190508781101561200b576040805162461bcd60e51b815260206004820181905260248201527f42504c504d616e616765723a20696e73756666696369656e74206f7574707574604482015290519081900360640190fd5b604080516001600160a01b03808e1682528c1660208201528082018b9052606081018790526080810186905260a0810185905260c0810183905290517f87b9679bb9a4944bafa98c267e7cd4a00ab29fed48afdefae25f0fca5da279409181900360e00190a19a9950505050505050505050565b6000818361210b5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156120d05781810151838201526020016120b8565b50505050905090810190601f1680156120fd5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161211757fe5b0495945050505050565b600081848411156121735760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156120d05781810151838201526020016120b8565b505050900390565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526121d59085906121db565b50505050565b6060612230826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166122919092919063ffffffff16565b80519091501561228c5780806020019051602081101561224f57600080fd5b505161228c5760405162461bcd60e51b815260040180806020018281038252602a81526020018061251b602a913960400191505060405180910390fd5b505050565b606061169a8484600085856122a5856123b7565b6122f6576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106123355780518252601f199092019160209182019101612316565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612397576040519150601f19603f3d011682016040523d82523d6000602084013e61239c565b606091505b50915091506123ac8282866123bd565b979650505050505050565b3b151590565b606083156123cc5750816111ae565b8251156123dc5782518084602001fd5b60405162461bcd60e51b81526020600482018181528451602484015284518593919283926044019190850190808383600083156120d05781810151838201526020016120b856fe5265656e7472616e637947756172643a207265656e7472616e742063616c6c00476f7665726e61626c653a20666f7262696464656e000000000000000000000042504c504d616e616765723a20616374696f6e206e6f7420656e61626c65640042504c504d616e616765723a20696e73756666696369656e742055534447206f757470757442504c504d616e616765723a20696e73756666696369656e7420474c50206f757470757442504c504d616e616765723a20636f6f6c646f776e206475726174696f6e206e6f742079657420706173736564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f74207375636365656442504c504d616e616765723a20696e76616c6964205f636f6f6c646f776e4475726174696f6ea26469706673582212204e28732a53809fb266c893152225911cb4801e39f0ec8188df618c0eb6145a9764736f6c634300060c0033";

type BPLPManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BPLPManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BPLPManager__factory extends ContractFactory {
  constructor(...args: BPLPManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _vault: PromiseOrValue<string>,
    _usdg: PromiseOrValue<string>,
    _glp: PromiseOrValue<string>,
    _shortsTracker: PromiseOrValue<string>,
    _cooldownDuration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BPLPManager> {
    return super.deploy(
      _vault,
      _usdg,
      _glp,
      _shortsTracker,
      _cooldownDuration,
      overrides || {}
    ) as Promise<BPLPManager>;
  }
  override getDeployTransaction(
    _vault: PromiseOrValue<string>,
    _usdg: PromiseOrValue<string>,
    _glp: PromiseOrValue<string>,
    _shortsTracker: PromiseOrValue<string>,
    _cooldownDuration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _vault,
      _usdg,
      _glp,
      _shortsTracker,
      _cooldownDuration,
      overrides || {}
    );
  }
  override attach(address: string): BPLPManager {
    return super.attach(address) as BPLPManager;
  }
  override connect(signer: Signer): BPLPManager__factory {
    return super.connect(signer) as BPLPManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BPLPManagerInterface {
    return new utils.Interface(_abi) as BPLPManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BPLPManager {
    return new Contract(address, _abi, signerOrProvider) as BPLPManager;
  }
}
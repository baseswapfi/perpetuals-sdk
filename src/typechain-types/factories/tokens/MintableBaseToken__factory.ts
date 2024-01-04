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
import type { PromiseOrValue } from "../../common";
import type {
  MintableBaseToken,
  MintableBaseTokenInterface,
} from "../../tokens/MintableBaseToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_initialSupply",
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
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "addAdmin",
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
    ],
    name: "addNonStakingAccount",
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
    name: "admins",
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
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowances",
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
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    ],
    name: "balanceOf",
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
    name: "balances",
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
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
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
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
    name: "inPrivateTransferMode",
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
    name: "isMinter",
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
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    name: "nonStakingAccounts",
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
    inputs: [],
    name: "nonStakingSupply",
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
        name: "_account",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "recoverClaim",
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
    ],
    name: "removeAdmin",
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
    ],
    name: "removeNonStakingAccount",
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
        name: "_inPrivateTransferMode",
        type: "bool",
      },
    ],
    name: "setInPrivateTransferMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    name: "setInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isActive",
        type: "bool",
      },
    ],
    name: "setMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_yieldTrackers",
        type: "address[]",
      },
    ],
    name: "setYieldTrackers",
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
    ],
    name: "stakedBalance",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStaked",
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
    name: "totalSupply",
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
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "yieldTrackers",
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200267f3803806200267f833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b50604052602090810151855190935085925084918491620001c091600091908601906200043b565b508151620001d69060019060208501906200043b565b50600480546001600160a01b03191633908117909155620001f8908262000204565b505050505050620004d7565b6001600160a01b0382166200024b5760405162461bcd60e51b81526004018080602001828103825260238152602001806200265c6023913960400191505060405180910390fd5b62000256826200033a565b6200027281600254620003d960201b6200143d1790919060201c565b6002556001600160a01b038216600090815260056020908152604090912054620002a79183906200143d620003d9821b17901c565b6001600160a01b03831660009081526005602090815260408083209390935560089052205460ff1615620002f557620002f181600354620003d960201b6200143d1790919060201c565b6003555b6040805182815290516001600160a01b038416916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60005b600754811015620003d5576000600782815481106200035857fe5b600091825260208220015460408051635fd6196560e01b81526001600160a01b03878116600483015291519190921693508392635fd61965926024808201939182900301818387803b158015620003ae57600080fd5b505af1158015620003c3573d6000803e3d6000fd5b5050600190930192506200033d915050565b5050565b60008282018381101562000434576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200047e57805160ff1916838001178555620004ae565b82800160010185558215620004ae579182015b82811115620004ae57825182559160200191906001019062000491565b50620004bc929150620004c0565b5090565b5b80821115620004bc5760008155600101620004c1565b61217580620004e76000396000f3fe608060405234801561001057600080fd5b50600436106101ac5760003560e01c806301e33667146101b157806306fdde03146101e9578063095ea7b31461026657806312d43a51146102a65780631785f53c146102ca57806318160ddd146102f05780631e83409a1461030a57806323b872dd14610330578063276eab4e1461036657806327e235e314610407578063313ce5671461042d57806340c10f191461044b578063429b62e51461047757806346ea87af1461049d57806352cd38d9146104c357806355b6ed5c146104e05780635a47a1a71461050e578063602172671461052d5780636228907714610553578063704802751461057957806370a082311461059f578063817b1cd2146105c55780639554381a146105cd57806395d89b41146105f3578063996f11ee146105fb5780639cb7de4b146106295780639dc29fac14610657578063a9059cbb14610683578063a923fc40146106af578063aa271e1a146107d8578063c93be636146107fe578063cf456ae714610806578063cfad57a214610834578063dd62ed3e1461085a578063dfbaefb114610888578063fb30d91614610890575b600080fd5b6101e7600480360360608110156101c757600080fd5b506001600160a01b038135811691602081013590911690604001356108b6565b005b6101f161091c565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561022b578181015183820152602001610213565b50505050905090810190601f1680156102585780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102926004803603604081101561027c57600080fd5b506001600160a01b0381351690602001356109aa565b604080519115158252519081900360200190f35b6102ae6109c0565b604080516001600160a01b039092168252519081900360200190f35b6101e7600480360360208110156102e057600080fd5b50356001600160a01b03166109cf565b6102f8610a3d565b60408051918252519081900360200190f35b6101e76004803603602081101561032057600080fd5b50356001600160a01b0316610a43565b6102926004803603606081101561034657600080fd5b506001600160a01b03813581169160208101359091169060400135610afa565b6101e76004803603602081101561037c57600080fd5b810190602081018135600160201b81111561039657600080fd5b8201836020820111156103a857600080fd5b803590602001918460208302840111600160201b831117156103c957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610b94945050505050565b6102f86004803603602081101561041d57600080fd5b50356001600160a01b0316610bf4565b610435610c06565b6040805160ff9092168252519081900360200190f35b6101e76004803603604081101561046157600080fd5b506001600160a01b038135169060200135610c0b565b6102926004803603602081101561048d57600080fd5b50356001600160a01b0316610c78565b610292600480360360208110156104b357600080fd5b50356001600160a01b0316610c8d565b6102ae600480360360208110156104d957600080fd5b5035610ca2565b6102f8600480360360408110156104f657600080fd5b506001600160a01b0381358116916020013516610cc9565b6101e76004803603602081101561052457600080fd5b50351515610ce6565b6102f86004803603602081101561054357600080fd5b50356001600160a01b0316610d46565b6101e76004803603602081101561056957600080fd5b50356001600160a01b0316610d8f565b6101e76004803603602081101561058f57600080fd5b50356001600160a01b0316610e82565b6102f8600480360360208110156105b557600080fd5b50356001600160a01b0316610ef3565b6102f8610f0e565b610292600480360360208110156105e357600080fd5b50356001600160a01b0316610f2c565b6101f1610f41565b6101e76004803603604081101561061157600080fd5b506001600160a01b0381358116916020013516610f9b565b6101e76004803603604081101561063f57600080fd5b506001600160a01b03813516906020013515156110a2565b6101e76004803603604081101561066d57600080fd5b506001600160a01b03813516906020013561111a565b6102926004803603604081101561069957600080fd5b506001600160a01b038135169060200135611187565b6101e7600480360360408110156106c557600080fd5b810190602081018135600160201b8111156106df57600080fd5b8201836020820111156106f157600080fd5b803590602001918460018302840111600160201b8311171561071257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561076457600080fd5b82018360208201111561077657600080fd5b803590602001918460018302840111600160201b8311171561079757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611194945050505050565b610292600480360360208110156107ee57600080fd5b50356001600160a01b0316611208565b6102f861121d565b6101e76004803603604081101561081c57600080fd5b506001600160a01b0381351690602001351515611223565b6101e76004803603602081101561084a57600080fd5b50356001600160a01b031661129b565b6102f86004803603604081101561087057600080fd5b506001600160a01b038135811691602001351661130a565b610292611335565b6101e7600480360360208110156108a657600080fd5b50356001600160a01b031661133e565b6004546001600160a01b03163314610903576040805162461bcd60e51b81526020600482015260146024820152600080516020611fee833981519152604482015290519081900360640190fd5b6109176001600160a01b0384168383611495565b505050565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156109a25780601f10610977576101008083540402835291602001916109a2565b820191906000526020600020905b81548152906001019060200180831161098557829003601f168201915b505050505081565b60006109b73384846114e7565b50600192915050565b6004546001600160a01b031681565b6004546001600160a01b03163314610a1c576040805162461bcd60e51b81526020600482015260146024820152600080516020611fee833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152600960205260409020805460ff19169055565b60025481565b60005b600754811015610af657600060078281548110610a5f57fe5b6000918252602080832090910154604080516310e059a160e11b81523360048201526001600160a01b038881166024830152915191909216945084936321c0b34293604480850194919392918390030190829087803b158015610ac157600080fd5b505af1158015610ad5573d6000803e3d6000fd5b505050506040513d6020811015610aeb57600080fd5b505050600101610a46565b5050565b336000908152600b602052604081205460ff1615610b2557610b1d8484846115d3565b506001610b8d565b6000610b6f836040518060600160405280602c8152602001611f9c602c91396001600160a01b038816600090815260066020908152604080832033845290915290205491906117e9565b9050610b7c8533836114e7565b610b878585856115d3565b60019150505b9392505050565b6004546001600160a01b03163314610be1576040805162461bcd60e51b81526020600482015260146024820152600080516020611fee833981519152604482015290519081900360640190fd5b8051610af6906007906020840190611df3565b60056020526000908152604090205481565b601281565b336000908152600c602052604090205460ff16610c6e576040805162461bcd60e51b815260206004820152601c60248201527b26b4b73a30b13632a130b9b2aa37b5b2b71d103337b93134b23232b760211b604482015290519081900360640190fd5b610af68282611880565b60096020526000908152604090205460ff1681565b600b6020526000908152604090205460ff1681565b60078181548110610caf57fe5b6000918252602090912001546001600160a01b0316905081565b600660209081526000928352604080842090915290825290205481565b6004546001600160a01b03163314610d33576040805162461bcd60e51b81526020600482015260146024820152600080516020611fee833981519152604482015290519081900360640190fd5b600a805460ff1916911515919091179055565b6001600160a01b03811660009081526008602052604081205460ff1615610d6f57506000610d8a565b506001600160a01b0381166000908152600560205260409020545b919050565b3360009081526009602052604090205460ff16610de1576040805162461bcd60e51b81526020600482015260146024820152600080516020611fee833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526008602052604090205460ff1615610e395760405162461bcd60e51b81526004018080602001828103825260228152602001806120806022913960400191505060405180910390fd5b610e4281611972565b6001600160a01b0381166000908152600860209081526040808320805460ff191660011790556005909152902054600354610e7c9161143d565b60035550565b6004546001600160a01b03163314610ecf576040805162461bcd60e51b81526020600482015260146024820152600080516020611fee833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152600960205260409020805460ff19166001179055565b6001600160a01b031660009081526005602052604090205490565b6000610f27600354600254611a0890919063ffffffff16565b905090565b60086020526000908152604090205460ff1681565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156109a25780601f10610977576101008083540402835291602001916109a2565b3360009081526009602052604090205460ff16610fed576040805162461bcd60e51b81526020600482015260146024820152600080516020611fee833981519152604482015290519081900360640190fd5b60005b6007548110156109175760006007828154811061100957fe5b6000918252602080832090910154604080516310e059a160e11b81526001600160a01b0389811660048301528881166024830152915191909216945084936321c0b34293604480850194919392918390030190829087803b15801561106d57600080fd5b505af1158015611081573d6000803e3d6000fd5b505050506040513d602081101561109757600080fd5b505050600101610ff0565b6004546001600160a01b031633146110ef576040805162461bcd60e51b81526020600482015260146024820152600080516020611fee833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152600b60205260409020805460ff1916911515919091179055565b336000908152600c602052604090205460ff1661117d576040805162461bcd60e51b815260206004820152601c60248201527b26b4b73a30b13632a130b9b2aa37b5b2b71d103337b93134b23232b760211b604482015290519081900360640190fd5b610af68282611a4a565b60006109b73384846115d3565b6004546001600160a01b031633146111e1576040805162461bcd60e51b81526020600482015260146024820152600080516020611fee833981519152604482015290519081900360640190fd5b81516111f4906000906020850190611e58565b508051610917906001906020840190611e58565b600c6020526000908152604090205460ff1681565b60035481565b6004546001600160a01b03163314611270576040805162461bcd60e51b81526020600482015260146024820152600080516020611fee833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152600c60205260409020805460ff1916911515919091179055565b6004546001600160a01b031633146112e8576040805162461bcd60e51b81526020600482015260146024820152600080516020611fee833981519152604482015290519081900360640190fd5b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b600a5460ff1681565b3360009081526009602052604090205460ff16611390576040805162461bcd60e51b81526020600482015260146024820152600080516020611fee833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526008602052604090205460ff166113fd576040805162461bcd60e51b815260206004820152601e60248201527f42617365546f6b656e3a205f6163636f756e74206e6f74206d61726b65640000604482015290519081900360640190fd5b61140681611972565b6001600160a01b0381166000908152600860209081526040808320805460ff191690556005909152902054600354610e7c91611a08565b600082820183811015610b8d576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610917908490611b63565b6001600160a01b03831661152c5760405162461bcd60e51b815260040180806020018281038252602881526020018061200e6028913960400191505060405180910390fd5b6001600160a01b0382166115715760405162461bcd60e51b8152600401808060200182810382526026815260200180611f766026913960400191505060405180910390fd5b6001600160a01b03808416600081815260066020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166116185760405162461bcd60e51b81526004018080602001828103825260298152602001806121176029913960400191505060405180910390fd5b6001600160a01b03821661165d5760405162461bcd60e51b8152600401808060200182810382526027815260200180611f2c6027913960400191505060405180910390fd5b600a5460ff16156116b657336000908152600b602052604090205460ff166116b65760405162461bcd60e51b8152600401808060200182810382526025815260200180611f076025913960400191505060405180910390fd5b6116bf83611972565b6116c882611972565b611705816040518060600160405280602a8152602001612036602a91396001600160a01b03861660009081526005602052604090205491906117e9565b6001600160a01b038085166000908152600560205260408082209390935590841681522054611734908261143d565b6001600160a01b0380841660009081526005602090815260408083209490945591861681526008909152205460ff1615611779576003546117759082611a08565b6003555b6001600160a01b03821660009081526008602052604090205460ff16156117ab576003546117a7908261143d565b6003555b816001600160a01b0316836001600160a01b0316600080516020612060833981519152836040518082815260200191505060405180910390a3505050565b600081848411156118785760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561183d578181015183820152602001611825565b50505050905090810190601f16801561186a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b0382166118c55760405162461bcd60e51b8152600401808060200182810382526023815260200180611f536023913960400191505060405180910390fd5b6118ce82611972565b6002546118db908261143d565b6002556001600160a01b038216600090815260056020526040902054611901908261143d565b6001600160a01b03831660009081526005602090815260408083209390935560089052205460ff161561193f5760035461193b908261143d565b6003555b6040805182815290516001600160a01b038416916000916000805160206120608339815191529181900360200190a35050565b60005b600754811015610af65760006007828154811061198e57fe5b600091825260208220015460408051635fd6196560e01b81526001600160a01b03878116600483015291519190921693508392635fd61965926024808201939182900301818387803b1580156119e357600080fd5b505af11580156119f7573d6000803e3d6000fd5b505060019093019250611975915050565b6000610b8d83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506117e9565b6001600160a01b038216611a8f5760405162461bcd60e51b81526004018080602001828103825260258152602001806120f26025913960400191505060405180910390fd5b611a9882611972565b611ad5816040518060600160405280602681526020016120a2602691396001600160a01b03851660009081526005602052604090205491906117e9565b6001600160a01b038316600090815260056020526040902055600254611afb9082611a08565b6002556001600160a01b03821660009081526008602052604090205460ff1615611b3057600354611b2c9082611a08565b6003555b6040805182815290516000916001600160a01b038516916000805160206120608339815191529181900360200190a35050565b6060611bb8826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611c149092919063ffffffff16565b80519091501561091757808060200190516020811015611bd757600080fd5b50516109175760405162461bcd60e51b815260040180806020018281038252602a8152602001806120c8602a913960400191505060405180910390fd5b6060611c238484600085611c2b565b949350505050565b606082471015611c6c5760405162461bcd60e51b8152600401808060200182810382526026815260200180611fc86026913960400191505060405180910390fd5b611c7585611d87565b611cc6576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611d055780518252601f199092019160209182019101611ce6565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611d67576040519150601f19603f3d011682016040523d82523d6000602084013e611d6c565b606091505b5091509150611d7c828286611d8d565b979650505050505050565b3b151590565b60608315611d9c575081610b8d565b825115611dac5782518084602001fd5b60405162461bcd60e51b815260206004820181815284516024840152845185939192839260440191908501908083836000831561183d578181015183820152602001611825565b828054828255906000526020600020908101928215611e48579160200282015b82811115611e4857825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190611e13565b50611e54929150611ed2565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611e9957805160ff1916838001178555611ec6565b82800160010185558215611ec6579182015b82811115611ec6578251825591602001919060010190611eab565b50611e54929150611ef1565b5b80821115611e545780546001600160a01b0319168155600101611ed3565b5b80821115611e545760008155600101611ef256fe42617365546f6b656e3a206d73672e73656e646572206e6f742077686974656c697374656442617365546f6b656e3a207472616e7366657220746f20746865207a65726f206164647265737342617365546f6b656e3a206d696e7420746f20746865207a65726f206164647265737342617365546f6b656e3a20617070726f766520746f20746865207a65726f206164647265737342617365546f6b656e3a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c42617365546f6b656e3a20666f7262696464656e00000000000000000000000042617365546f6b656e3a20617070726f76652066726f6d20746865207a65726f206164647265737342617365546f6b656e3a207472616e7366657220616d6f756e7420657863656564732062616c616e6365ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef42617365546f6b656e3a205f6163636f756e7420616c7265616479206d61726b656442617365546f6b656e3a206275726e20616d6f756e7420657863656564732062616c616e63655361666545524332303a204552433230206f7065726174696f6e20646964206e6f74207375636365656442617365546f6b656e3a206275726e2066726f6d20746865207a65726f206164647265737342617365546f6b656e3a207472616e736665722066726f6d20746865207a65726f2061646472657373a2646970667358221220cb39a95dcbc3b71d6a3fe3fbef8ed3ae75f4d565246789faa6f60b52e6a6f9cb64736f6c634300060c003342617365546f6b656e3a206d696e7420746f20746865207a65726f2061646472657373";

type MintableBaseTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MintableBaseTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MintableBaseToken__factory extends ContractFactory {
  constructor(...args: MintableBaseTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _initialSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MintableBaseToken> {
    return super.deploy(
      _name,
      _symbol,
      _initialSupply,
      overrides || {}
    ) as Promise<MintableBaseToken>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _initialSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _initialSupply,
      overrides || {}
    );
  }
  override attach(address: string): MintableBaseToken {
    return super.attach(address) as MintableBaseToken;
  }
  override connect(signer: Signer): MintableBaseToken__factory {
    return super.connect(signer) as MintableBaseToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MintableBaseTokenInterface {
    return new utils.Interface(_abi) as MintableBaseTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MintableBaseToken {
    return new Contract(address, _abi, signerOrProvider) as MintableBaseToken;
  }
}

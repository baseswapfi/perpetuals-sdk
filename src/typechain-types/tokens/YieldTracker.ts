/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface YieldTrackerInterface extends utils.Interface {
  functions: {
    "PRECISION()": FunctionFragment;
    "claim(address,address)": FunctionFragment;
    "claimable(address)": FunctionFragment;
    "claimableReward(address)": FunctionFragment;
    "cumulativeRewardPerToken()": FunctionFragment;
    "distributor()": FunctionFragment;
    "getTokensPerInterval()": FunctionFragment;
    "gov()": FunctionFragment;
    "previousCumulatedRewardPerToken(address)": FunctionFragment;
    "setDistributor(address)": FunctionFragment;
    "setGov(address)": FunctionFragment;
    "updateRewards(address)": FunctionFragment;
    "withdrawToken(address,address,uint256)": FunctionFragment;
    "yieldToken()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "PRECISION"
      | "claim"
      | "claimable"
      | "claimableReward"
      | "cumulativeRewardPerToken"
      | "distributor"
      | "getTokensPerInterval"
      | "gov"
      | "previousCumulatedRewardPerToken"
      | "setDistributor"
      | "setGov"
      | "updateRewards"
      | "withdrawToken"
      | "yieldToken"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "claimable",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "claimableReward",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "cumulativeRewardPerToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "distributor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokensPerInterval",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "previousCumulatedRewardPerToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setDistributor",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setGov",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRewards",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "yieldToken",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimableReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cumulativeRewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokensPerInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "previousCumulatedRewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDistributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "yieldToken", data: BytesLike): Result;

  events: {
    "Claim(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
}

export interface ClaimEventObject {
  receiver: string;
  amount: BigNumber;
}
export type ClaimEvent = TypedEvent<[string, BigNumber], ClaimEventObject>;

export type ClaimEventFilter = TypedEventFilter<ClaimEvent>;

export interface YieldTracker extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: YieldTrackerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    claim(
      _account: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimable(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claimableReward(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    cumulativeRewardPerToken(overrides?: CallOverrides): Promise<[BigNumber]>;

    distributor(overrides?: CallOverrides): Promise<[string]>;

    getTokensPerInterval(overrides?: CallOverrides): Promise<[BigNumber]>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    previousCumulatedRewardPerToken(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setDistributor(
      _distributor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateRewards(
      _account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawToken(
      _token: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    yieldToken(overrides?: CallOverrides): Promise<[string]>;
  };

  PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  claim(
    _account: PromiseOrValue<string>,
    _receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimable(
    _account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimableReward(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  cumulativeRewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

  distributor(overrides?: CallOverrides): Promise<string>;

  getTokensPerInterval(overrides?: CallOverrides): Promise<BigNumber>;

  gov(overrides?: CallOverrides): Promise<string>;

  previousCumulatedRewardPerToken(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setDistributor(
    _distributor: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setGov(
    _gov: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateRewards(
    _account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawToken(
    _token: PromiseOrValue<string>,
    _account: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  yieldToken(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      _account: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimable(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimableReward(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cumulativeRewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    distributor(overrides?: CallOverrides): Promise<string>;

    getTokensPerInterval(overrides?: CallOverrides): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<string>;

    previousCumulatedRewardPerToken(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setDistributor(
      _distributor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRewards(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawToken(
      _token: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    yieldToken(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Claim(address,uint256)"(receiver?: null, amount?: null): ClaimEventFilter;
    Claim(receiver?: null, amount?: null): ClaimEventFilter;
  };

  estimateGas: {
    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      _account: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimable(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimableReward(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cumulativeRewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;

    distributor(overrides?: CallOverrides): Promise<BigNumber>;

    getTokensPerInterval(overrides?: CallOverrides): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    previousCumulatedRewardPerToken(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setDistributor(
      _distributor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateRewards(
      _account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawToken(
      _token: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    yieldToken(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      _account: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimable(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimableReward(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cumulativeRewardPerToken(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    distributor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokensPerInterval(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    previousCumulatedRewardPerToken(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setDistributor(
      _distributor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateRewards(
      _account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawToken(
      _token: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    yieldToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

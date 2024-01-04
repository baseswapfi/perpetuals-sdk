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

export interface TimeDistributorInterface extends utils.Interface {
  functions: {
    "DISTRIBUTION_INTERVAL()": FunctionFragment;
    "admin()": FunctionFragment;
    "distribute()": FunctionFragment;
    "getDistributionAmount(address)": FunctionFragment;
    "getIntervals(address)": FunctionFragment;
    "getRewardToken(address)": FunctionFragment;
    "gov()": FunctionFragment;
    "lastDistributionTime(address)": FunctionFragment;
    "rewardTokens(address)": FunctionFragment;
    "setDistribution(address[],uint256[],address[])": FunctionFragment;
    "setGov(address)": FunctionFragment;
    "setTokensPerInterval(address,uint256)": FunctionFragment;
    "tokensPerInterval(address)": FunctionFragment;
    "updateLastDistributionTime(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DISTRIBUTION_INTERVAL"
      | "admin"
      | "distribute"
      | "getDistributionAmount"
      | "getIntervals"
      | "getRewardToken"
      | "gov"
      | "lastDistributionTime"
      | "rewardTokens"
      | "setDistribution"
      | "setGov"
      | "setTokensPerInterval"
      | "tokensPerInterval"
      | "updateLastDistributionTime"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DISTRIBUTION_INTERVAL",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "distribute",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDistributionAmount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getIntervals",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastDistributionTime",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardTokens",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setDistribution",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setGov",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokensPerInterval",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensPerInterval",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateLastDistributionTime",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "DISTRIBUTION_INTERVAL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDistributionAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIntervals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastDistributionTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTokensPerInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensPerInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateLastDistributionTime",
    data: BytesLike
  ): Result;

  events: {
    "Distribute(address,uint256)": EventFragment;
    "DistributionChange(address,uint256,address)": EventFragment;
    "TokensPerIntervalChange(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Distribute"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DistributionChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensPerIntervalChange"): EventFragment;
}

export interface DistributeEventObject {
  receiver: string;
  amount: BigNumber;
}
export type DistributeEvent = TypedEvent<
  [string, BigNumber],
  DistributeEventObject
>;

export type DistributeEventFilter = TypedEventFilter<DistributeEvent>;

export interface DistributionChangeEventObject {
  receiver: string;
  amount: BigNumber;
  rewardToken: string;
}
export type DistributionChangeEvent = TypedEvent<
  [string, BigNumber, string],
  DistributionChangeEventObject
>;

export type DistributionChangeEventFilter =
  TypedEventFilter<DistributionChangeEvent>;

export interface TokensPerIntervalChangeEventObject {
  receiver: string;
  amount: BigNumber;
}
export type TokensPerIntervalChangeEvent = TypedEvent<
  [string, BigNumber],
  TokensPerIntervalChangeEventObject
>;

export type TokensPerIntervalChangeEventFilter =
  TypedEventFilter<TokensPerIntervalChangeEvent>;

export interface TimeDistributor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TimeDistributorInterface;

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
    DISTRIBUTION_INTERVAL(overrides?: CallOverrides): Promise<[BigNumber]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    distribute(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getDistributionAmount(
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getIntervals(
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRewardToken(
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    lastDistributionTime(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewardTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setDistribution(
      _receivers: PromiseOrValue<string>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      _rewardTokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTokensPerInterval(
      _receiver: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokensPerInterval(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    updateLastDistributionTime(
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  DISTRIBUTION_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;

  admin(overrides?: CallOverrides): Promise<string>;

  distribute(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getDistributionAmount(
    _receiver: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getIntervals(
    _receiver: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRewardToken(
    _receiver: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  gov(overrides?: CallOverrides): Promise<string>;

  lastDistributionTime(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewardTokens(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  setDistribution(
    _receivers: PromiseOrValue<string>[],
    _amounts: PromiseOrValue<BigNumberish>[],
    _rewardTokens: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setGov(
    _gov: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTokensPerInterval(
    _receiver: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokensPerInterval(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  updateLastDistributionTime(
    _receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DISTRIBUTION_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<string>;

    distribute(overrides?: CallOverrides): Promise<BigNumber>;

    getDistributionAmount(
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIntervals(
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardToken(
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    gov(overrides?: CallOverrides): Promise<string>;

    lastDistributionTime(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    setDistribution(
      _receivers: PromiseOrValue<string>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      _rewardTokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTokensPerInterval(
      _receiver: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    tokensPerInterval(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateLastDistributionTime(
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Distribute(address,uint256)"(
      receiver?: null,
      amount?: null
    ): DistributeEventFilter;
    Distribute(receiver?: null, amount?: null): DistributeEventFilter;

    "DistributionChange(address,uint256,address)"(
      receiver?: null,
      amount?: null,
      rewardToken?: null
    ): DistributionChangeEventFilter;
    DistributionChange(
      receiver?: null,
      amount?: null,
      rewardToken?: null
    ): DistributionChangeEventFilter;

    "TokensPerIntervalChange(address,uint256)"(
      receiver?: null,
      amount?: null
    ): TokensPerIntervalChangeEventFilter;
    TokensPerIntervalChange(
      receiver?: null,
      amount?: null
    ): TokensPerIntervalChangeEventFilter;
  };

  estimateGas: {
    DISTRIBUTION_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    distribute(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getDistributionAmount(
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIntervals(
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardToken(
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    lastDistributionTime(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setDistribution(
      _receivers: PromiseOrValue<string>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      _rewardTokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTokensPerInterval(
      _receiver: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokensPerInterval(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateLastDistributionTime(
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DISTRIBUTION_INTERVAL(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    distribute(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getDistributionAmount(
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIntervals(
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardToken(
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastDistributionTime(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setDistribution(
      _receivers: PromiseOrValue<string>[],
      _amounts: PromiseOrValue<BigNumberish>[],
      _rewardTokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTokensPerInterval(
      _receiver: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokensPerInterval(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateLastDistributionTime(
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

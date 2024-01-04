/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface IRewardRouterV2Interface extends utils.Interface {
  functions: {
    "feeGlpTracker()": FunctionFragment;
    "stakedGlpTracker()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "feeGlpTracker" | "stakedGlpTracker"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "feeGlpTracker",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stakedGlpTracker",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "feeGlpTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakedGlpTracker",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IRewardRouterV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRewardRouterV2Interface;

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
    feeGlpTracker(overrides?: CallOverrides): Promise<[string]>;

    stakedGlpTracker(overrides?: CallOverrides): Promise<[string]>;
  };

  feeGlpTracker(overrides?: CallOverrides): Promise<string>;

  stakedGlpTracker(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    feeGlpTracker(overrides?: CallOverrides): Promise<string>;

    stakedGlpTracker(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    feeGlpTracker(overrides?: CallOverrides): Promise<BigNumber>;

    stakedGlpTracker(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    feeGlpTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakedGlpTracker(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

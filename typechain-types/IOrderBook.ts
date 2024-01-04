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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface IOrderBookInterface extends utils.Interface {
  functions: {
    "executeDecreaseOrder(address,uint256,address)": FunctionFragment;
    "executeIncreaseOrder(address,uint256,address)": FunctionFragment;
    "executeSwapOrder(address,uint256,address)": FunctionFragment;
    "getDecreaseOrder(address,uint256)": FunctionFragment;
    "getIncreaseOrder(address,uint256)": FunctionFragment;
    "getSwapOrder(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "executeDecreaseOrder"
      | "executeIncreaseOrder"
      | "executeSwapOrder"
      | "getDecreaseOrder"
      | "getIncreaseOrder"
      | "getSwapOrder"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "executeDecreaseOrder",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeIncreaseOrder",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeSwapOrder",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getDecreaseOrder",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getIncreaseOrder",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapOrder",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "executeDecreaseOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeIncreaseOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeSwapOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDecreaseOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIncreaseOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSwapOrder",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IOrderBook extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IOrderBookInterface;

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
    executeDecreaseOrder(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeIncreaseOrder(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeSwapOrder(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getDecreaseOrder(
      _account: PromiseOrValue<string>,
      _orderIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        BigNumber,
        string,
        BigNumber,
        boolean,
        BigNumber,
        boolean,
        BigNumber
      ] & {
        collateralToken: string;
        collateralDelta: BigNumber;
        indexToken: string;
        sizeDelta: BigNumber;
        isLong: boolean;
        triggerPrice: BigNumber;
        triggerAboveThreshold: boolean;
        executionFee: BigNumber;
      }
    >;

    getIncreaseOrder(
      _account: PromiseOrValue<string>,
      _orderIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        BigNumber,
        string,
        string,
        BigNumber,
        boolean,
        BigNumber,
        boolean,
        BigNumber
      ] & {
        purchaseToken: string;
        purchaseTokenAmount: BigNumber;
        collateralToken: string;
        indexToken: string;
        sizeDelta: BigNumber;
        isLong: boolean;
        triggerPrice: BigNumber;
        triggerAboveThreshold: boolean;
        executionFee: BigNumber;
      }
    >;

    getSwapOrder(
      _account: PromiseOrValue<string>,
      _orderIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        BigNumber
      ] & {
        path0: string;
        path1: string;
        path2: string;
        amountIn: BigNumber;
        minOut: BigNumber;
        triggerRatio: BigNumber;
        triggerAboveThreshold: boolean;
        shouldUnwrap: boolean;
        executionFee: BigNumber;
      }
    >;
  };

  executeDecreaseOrder(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    arg2: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeIncreaseOrder(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    arg2: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeSwapOrder(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    arg2: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getDecreaseOrder(
    _account: PromiseOrValue<string>,
    _orderIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      BigNumber,
      string,
      BigNumber,
      boolean,
      BigNumber,
      boolean,
      BigNumber
    ] & {
      collateralToken: string;
      collateralDelta: BigNumber;
      indexToken: string;
      sizeDelta: BigNumber;
      isLong: boolean;
      triggerPrice: BigNumber;
      triggerAboveThreshold: boolean;
      executionFee: BigNumber;
    }
  >;

  getIncreaseOrder(
    _account: PromiseOrValue<string>,
    _orderIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      BigNumber,
      string,
      string,
      BigNumber,
      boolean,
      BigNumber,
      boolean,
      BigNumber
    ] & {
      purchaseToken: string;
      purchaseTokenAmount: BigNumber;
      collateralToken: string;
      indexToken: string;
      sizeDelta: BigNumber;
      isLong: boolean;
      triggerPrice: BigNumber;
      triggerAboveThreshold: boolean;
      executionFee: BigNumber;
    }
  >;

  getSwapOrder(
    _account: PromiseOrValue<string>,
    _orderIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      boolean,
      BigNumber
    ] & {
      path0: string;
      path1: string;
      path2: string;
      amountIn: BigNumber;
      minOut: BigNumber;
      triggerRatio: BigNumber;
      triggerAboveThreshold: boolean;
      shouldUnwrap: boolean;
      executionFee: BigNumber;
    }
  >;

  callStatic: {
    executeDecreaseOrder(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeIncreaseOrder(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeSwapOrder(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getDecreaseOrder(
      _account: PromiseOrValue<string>,
      _orderIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        BigNumber,
        string,
        BigNumber,
        boolean,
        BigNumber,
        boolean,
        BigNumber
      ] & {
        collateralToken: string;
        collateralDelta: BigNumber;
        indexToken: string;
        sizeDelta: BigNumber;
        isLong: boolean;
        triggerPrice: BigNumber;
        triggerAboveThreshold: boolean;
        executionFee: BigNumber;
      }
    >;

    getIncreaseOrder(
      _account: PromiseOrValue<string>,
      _orderIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        BigNumber,
        string,
        string,
        BigNumber,
        boolean,
        BigNumber,
        boolean,
        BigNumber
      ] & {
        purchaseToken: string;
        purchaseTokenAmount: BigNumber;
        collateralToken: string;
        indexToken: string;
        sizeDelta: BigNumber;
        isLong: boolean;
        triggerPrice: BigNumber;
        triggerAboveThreshold: boolean;
        executionFee: BigNumber;
      }
    >;

    getSwapOrder(
      _account: PromiseOrValue<string>,
      _orderIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        BigNumber
      ] & {
        path0: string;
        path1: string;
        path2: string;
        amountIn: BigNumber;
        minOut: BigNumber;
        triggerRatio: BigNumber;
        triggerAboveThreshold: boolean;
        shouldUnwrap: boolean;
        executionFee: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    executeDecreaseOrder(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeIncreaseOrder(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeSwapOrder(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getDecreaseOrder(
      _account: PromiseOrValue<string>,
      _orderIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIncreaseOrder(
      _account: PromiseOrValue<string>,
      _orderIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSwapOrder(
      _account: PromiseOrValue<string>,
      _orderIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    executeDecreaseOrder(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeIncreaseOrder(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeSwapOrder(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getDecreaseOrder(
      _account: PromiseOrValue<string>,
      _orderIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIncreaseOrder(
      _account: PromiseOrValue<string>,
      _orderIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSwapOrder(
      _account: PromiseOrValue<string>,
      _orderIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
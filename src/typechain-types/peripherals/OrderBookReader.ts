/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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
  PromiseOrValue,
} from "../common";

export interface OrderBookReaderInterface extends utils.Interface {
  functions: {
    "getDecreaseOrders(address,address,uint256[])": FunctionFragment;
    "getIncreaseOrders(address,address,uint256[])": FunctionFragment;
    "getSwapOrders(address,address,uint256[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getDecreaseOrders"
      | "getIncreaseOrders"
      | "getSwapOrders"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getDecreaseOrders",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getIncreaseOrders",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapOrders",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getDecreaseOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIncreaseOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSwapOrders",
    data: BytesLike
  ): Result;

  events: {};
}

export interface OrderBookReader extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OrderBookReaderInterface;

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
    getDecreaseOrders(
      _orderBookAddress: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _indices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[], string[]]>;

    getIncreaseOrders(
      _orderBookAddress: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _indices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[], string[]]>;

    getSwapOrders(
      _orderBookAddress: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _indices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[], string[]]>;
  };

  getDecreaseOrders(
    _orderBookAddress: PromiseOrValue<string>,
    _account: PromiseOrValue<string>,
    _indices: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<[BigNumber[], string[]]>;

  getIncreaseOrders(
    _orderBookAddress: PromiseOrValue<string>,
    _account: PromiseOrValue<string>,
    _indices: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<[BigNumber[], string[]]>;

  getSwapOrders(
    _orderBookAddress: PromiseOrValue<string>,
    _account: PromiseOrValue<string>,
    _indices: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<[BigNumber[], string[]]>;

  callStatic: {
    getDecreaseOrders(
      _orderBookAddress: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _indices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[], string[]]>;

    getIncreaseOrders(
      _orderBookAddress: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _indices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[], string[]]>;

    getSwapOrders(
      _orderBookAddress: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _indices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[], string[]]>;
  };

  filters: {};

  estimateGas: {
    getDecreaseOrders(
      _orderBookAddress: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _indices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIncreaseOrders(
      _orderBookAddress: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _indices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSwapOrders(
      _orderBookAddress: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _indices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getDecreaseOrders(
      _orderBookAddress: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _indices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIncreaseOrders(
      _orderBookAddress: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _indices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSwapOrders(
      _orderBookAddress: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _indices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

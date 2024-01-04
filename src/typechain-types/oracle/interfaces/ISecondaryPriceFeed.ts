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
} from "../../common";

export interface ISecondaryPriceFeedInterface extends utils.Interface {
  functions: {
    "getPrice(address,uint256,bool)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "getPrice"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getPrice",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;

  events: {};
}

export interface ISecondaryPriceFeed extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISecondaryPriceFeedInterface;

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
    getPrice(
      _token: PromiseOrValue<string>,
      _referencePrice: PromiseOrValue<BigNumberish>,
      _maximise: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  getPrice(
    _token: PromiseOrValue<string>,
    _referencePrice: PromiseOrValue<BigNumberish>,
    _maximise: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    getPrice(
      _token: PromiseOrValue<string>,
      _referencePrice: PromiseOrValue<BigNumberish>,
      _maximise: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getPrice(
      _token: PromiseOrValue<string>,
      _referencePrice: PromiseOrValue<BigNumberish>,
      _maximise: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getPrice(
      _token: PromiseOrValue<string>,
      _referencePrice: PromiseOrValue<BigNumberish>,
      _maximise: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
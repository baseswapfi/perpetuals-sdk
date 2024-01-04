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

export interface IRouterInterface extends utils.Interface {
  functions: {
    "addPlugin(address)": FunctionFragment;
    "pluginDecreasePosition(address,address,address,uint256,uint256,bool,address)": FunctionFragment;
    "pluginIncreasePosition(address,address,address,uint256,bool)": FunctionFragment;
    "pluginTransfer(address,address,address,uint256)": FunctionFragment;
    "swap(address[],uint256,uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addPlugin"
      | "pluginDecreasePosition"
      | "pluginIncreasePosition"
      | "pluginTransfer"
      | "swap"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addPlugin",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "pluginDecreasePosition",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "pluginIncreasePosition",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "pluginTransfer",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "addPlugin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pluginDecreasePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pluginIncreasePosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pluginTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;

  events: {};
}

export interface IRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRouterInterface;

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
    addPlugin(
      _plugin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    pluginDecreasePosition(
      _account: PromiseOrValue<string>,
      _collateralToken: PromiseOrValue<string>,
      _indexToken: PromiseOrValue<string>,
      _collateralDelta: PromiseOrValue<BigNumberish>,
      _sizeDelta: PromiseOrValue<BigNumberish>,
      _isLong: PromiseOrValue<boolean>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    pluginIncreasePosition(
      _account: PromiseOrValue<string>,
      _collateralToken: PromiseOrValue<string>,
      _indexToken: PromiseOrValue<string>,
      _sizeDelta: PromiseOrValue<BigNumberish>,
      _isLong: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    pluginTransfer(
      _token: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swap(
      _path: PromiseOrValue<string>[],
      _amountIn: PromiseOrValue<BigNumberish>,
      _minOut: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addPlugin(
    _plugin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  pluginDecreasePosition(
    _account: PromiseOrValue<string>,
    _collateralToken: PromiseOrValue<string>,
    _indexToken: PromiseOrValue<string>,
    _collateralDelta: PromiseOrValue<BigNumberish>,
    _sizeDelta: PromiseOrValue<BigNumberish>,
    _isLong: PromiseOrValue<boolean>,
    _receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  pluginIncreasePosition(
    _account: PromiseOrValue<string>,
    _collateralToken: PromiseOrValue<string>,
    _indexToken: PromiseOrValue<string>,
    _sizeDelta: PromiseOrValue<BigNumberish>,
    _isLong: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  pluginTransfer(
    _token: PromiseOrValue<string>,
    _account: PromiseOrValue<string>,
    _receiver: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swap(
    _path: PromiseOrValue<string>[],
    _amountIn: PromiseOrValue<BigNumberish>,
    _minOut: PromiseOrValue<BigNumberish>,
    _receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addPlugin(
      _plugin: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    pluginDecreasePosition(
      _account: PromiseOrValue<string>,
      _collateralToken: PromiseOrValue<string>,
      _indexToken: PromiseOrValue<string>,
      _collateralDelta: PromiseOrValue<BigNumberish>,
      _sizeDelta: PromiseOrValue<BigNumberish>,
      _isLong: PromiseOrValue<boolean>,
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pluginIncreasePosition(
      _account: PromiseOrValue<string>,
      _collateralToken: PromiseOrValue<string>,
      _indexToken: PromiseOrValue<string>,
      _sizeDelta: PromiseOrValue<BigNumberish>,
      _isLong: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    pluginTransfer(
      _token: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    swap(
      _path: PromiseOrValue<string>[],
      _amountIn: PromiseOrValue<BigNumberish>,
      _minOut: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addPlugin(
      _plugin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    pluginDecreasePosition(
      _account: PromiseOrValue<string>,
      _collateralToken: PromiseOrValue<string>,
      _indexToken: PromiseOrValue<string>,
      _collateralDelta: PromiseOrValue<BigNumberish>,
      _sizeDelta: PromiseOrValue<BigNumberish>,
      _isLong: PromiseOrValue<boolean>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    pluginIncreasePosition(
      _account: PromiseOrValue<string>,
      _collateralToken: PromiseOrValue<string>,
      _indexToken: PromiseOrValue<string>,
      _sizeDelta: PromiseOrValue<BigNumberish>,
      _isLong: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    pluginTransfer(
      _token: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swap(
      _path: PromiseOrValue<string>[],
      _amountIn: PromiseOrValue<BigNumberish>,
      _minOut: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addPlugin(
      _plugin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    pluginDecreasePosition(
      _account: PromiseOrValue<string>,
      _collateralToken: PromiseOrValue<string>,
      _indexToken: PromiseOrValue<string>,
      _collateralDelta: PromiseOrValue<BigNumberish>,
      _sizeDelta: PromiseOrValue<BigNumberish>,
      _isLong: PromiseOrValue<boolean>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    pluginIncreasePosition(
      _account: PromiseOrValue<string>,
      _collateralToken: PromiseOrValue<string>,
      _indexToken: PromiseOrValue<string>,
      _sizeDelta: PromiseOrValue<BigNumberish>,
      _isLong: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    pluginTransfer(
      _token: PromiseOrValue<string>,
      _account: PromiseOrValue<string>,
      _receiver: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      _path: PromiseOrValue<string>[],
      _amountIn: PromiseOrValue<BigNumberish>,
      _minOut: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
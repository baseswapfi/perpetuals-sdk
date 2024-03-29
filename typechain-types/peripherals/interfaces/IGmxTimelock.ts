/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
} from "../../common";

export interface IGmxTimelockInterface extends utils.Interface {
  functions: {
    "setAdmin(address)": FunctionFragment;
    "setIsLeverageEnabled(address,bool)": FunctionFragment;
    "signalSetGov(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "setAdmin" | "setIsLeverageEnabled" | "signalSetGov"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "setAdmin",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setIsLeverageEnabled",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "signalSetGov",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setIsLeverageEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalSetGov",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IGmxTimelock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGmxTimelockInterface;

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
    setAdmin(
      _admin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setIsLeverageEnabled(
      _vault: PromiseOrValue<string>,
      _isLeverageEnabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    signalSetGov(
      _target: PromiseOrValue<string>,
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  setAdmin(
    _admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setIsLeverageEnabled(
    _vault: PromiseOrValue<string>,
    _isLeverageEnabled: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  signalSetGov(
    _target: PromiseOrValue<string>,
    _gov: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    setAdmin(
      _admin: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setIsLeverageEnabled(
      _vault: PromiseOrValue<string>,
      _isLeverageEnabled: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    signalSetGov(
      _target: PromiseOrValue<string>,
      _gov: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    setAdmin(
      _admin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setIsLeverageEnabled(
      _vault: PromiseOrValue<string>,
      _isLeverageEnabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    signalSetGov(
      _target: PromiseOrValue<string>,
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    setAdmin(
      _admin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setIsLeverageEnabled(
      _vault: PromiseOrValue<string>,
      _isLeverageEnabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    signalSetGov(
      _target: PromiseOrValue<string>,
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

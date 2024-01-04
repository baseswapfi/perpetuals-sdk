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

export interface ReferralStorageInterface extends utils.Interface {
  functions: {
    "BASIS_POINTS()": FunctionFragment;
    "codeOwners(bytes32)": FunctionFragment;
    "getTraderReferralInfo(address)": FunctionFragment;
    "gov()": FunctionFragment;
    "govSetCodeOwner(bytes32,address)": FunctionFragment;
    "isHandler(address)": FunctionFragment;
    "referrerDiscountShares(address)": FunctionFragment;
    "referrerTiers(address)": FunctionFragment;
    "registerCode(bytes32)": FunctionFragment;
    "setCodeOwner(bytes32,address)": FunctionFragment;
    "setGov(address)": FunctionFragment;
    "setHandler(address,bool)": FunctionFragment;
    "setReferrerDiscountShare(uint256)": FunctionFragment;
    "setReferrerTier(address,uint256)": FunctionFragment;
    "setTier(uint256,uint256,uint256)": FunctionFragment;
    "setTraderReferralCode(address,bytes32)": FunctionFragment;
    "setTraderReferralCodeByUser(bytes32)": FunctionFragment;
    "tiers(uint256)": FunctionFragment;
    "traderReferralCodes(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BASIS_POINTS"
      | "codeOwners"
      | "getTraderReferralInfo"
      | "gov"
      | "govSetCodeOwner"
      | "isHandler"
      | "referrerDiscountShares"
      | "referrerTiers"
      | "registerCode"
      | "setCodeOwner"
      | "setGov"
      | "setHandler"
      | "setReferrerDiscountShare"
      | "setReferrerTier"
      | "setTier"
      | "setTraderReferralCode"
      | "setTraderReferralCodeByUser"
      | "tiers"
      | "traderReferralCodes"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BASIS_POINTS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "codeOwners",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTraderReferralInfo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "govSetCodeOwner",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isHandler",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "referrerDiscountShares",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "referrerTiers",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "registerCode",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setCodeOwner",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setGov",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setHandler",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setReferrerDiscountShare",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setReferrerTier",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTier",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setTraderReferralCode",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTraderReferralCodeByUser",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "tiers",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "traderReferralCodes",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "BASIS_POINTS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "codeOwners", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTraderReferralInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "govSetCodeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isHandler", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "referrerDiscountShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "referrerTiers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerCode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCodeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setHandler", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setReferrerDiscountShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReferrerTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setTier", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTraderReferralCode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTraderReferralCodeByUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tiers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "traderReferralCodes",
    data: BytesLike
  ): Result;

  events: {
    "GovSetCodeOwner(bytes32,address)": EventFragment;
    "RegisterCode(address,bytes32)": EventFragment;
    "SetCodeOwner(address,address,bytes32)": EventFragment;
    "SetHandler(address,bool)": EventFragment;
    "SetReferrerDiscountShare(address,uint256)": EventFragment;
    "SetReferrerTier(address,uint256)": EventFragment;
    "SetTier(uint256,uint256,uint256)": EventFragment;
    "SetTraderReferralCode(address,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GovSetCodeOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RegisterCode"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetCodeOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetHandler"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetReferrerDiscountShare"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetReferrerTier"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTier"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTraderReferralCode"): EventFragment;
}

export interface GovSetCodeOwnerEventObject {
  code: string;
  newAccount: string;
}
export type GovSetCodeOwnerEvent = TypedEvent<
  [string, string],
  GovSetCodeOwnerEventObject
>;

export type GovSetCodeOwnerEventFilter = TypedEventFilter<GovSetCodeOwnerEvent>;

export interface RegisterCodeEventObject {
  account: string;
  code: string;
}
export type RegisterCodeEvent = TypedEvent<
  [string, string],
  RegisterCodeEventObject
>;

export type RegisterCodeEventFilter = TypedEventFilter<RegisterCodeEvent>;

export interface SetCodeOwnerEventObject {
  account: string;
  newAccount: string;
  code: string;
}
export type SetCodeOwnerEvent = TypedEvent<
  [string, string, string],
  SetCodeOwnerEventObject
>;

export type SetCodeOwnerEventFilter = TypedEventFilter<SetCodeOwnerEvent>;

export interface SetHandlerEventObject {
  handler: string;
  isActive: boolean;
}
export type SetHandlerEvent = TypedEvent<
  [string, boolean],
  SetHandlerEventObject
>;

export type SetHandlerEventFilter = TypedEventFilter<SetHandlerEvent>;

export interface SetReferrerDiscountShareEventObject {
  referrer: string;
  discountShare: BigNumber;
}
export type SetReferrerDiscountShareEvent = TypedEvent<
  [string, BigNumber],
  SetReferrerDiscountShareEventObject
>;

export type SetReferrerDiscountShareEventFilter =
  TypedEventFilter<SetReferrerDiscountShareEvent>;

export interface SetReferrerTierEventObject {
  referrer: string;
  tierId: BigNumber;
}
export type SetReferrerTierEvent = TypedEvent<
  [string, BigNumber],
  SetReferrerTierEventObject
>;

export type SetReferrerTierEventFilter = TypedEventFilter<SetReferrerTierEvent>;

export interface SetTierEventObject {
  tierId: BigNumber;
  totalRebate: BigNumber;
  discountShare: BigNumber;
}
export type SetTierEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  SetTierEventObject
>;

export type SetTierEventFilter = TypedEventFilter<SetTierEvent>;

export interface SetTraderReferralCodeEventObject {
  account: string;
  code: string;
}
export type SetTraderReferralCodeEvent = TypedEvent<
  [string, string],
  SetTraderReferralCodeEventObject
>;

export type SetTraderReferralCodeEventFilter =
  TypedEventFilter<SetTraderReferralCodeEvent>;

export interface ReferralStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ReferralStorageInterface;

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
    BASIS_POINTS(overrides?: CallOverrides): Promise<[BigNumber]>;

    codeOwners(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getTraderReferralInfo(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    govSetCodeOwner(
      _code: PromiseOrValue<BytesLike>,
      _newAccount: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isHandler(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    referrerDiscountShares(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    referrerTiers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    registerCode(
      _code: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setCodeOwner(
      _code: PromiseOrValue<BytesLike>,
      _newAccount: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setHandler(
      _handler: PromiseOrValue<string>,
      _isActive: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setReferrerDiscountShare(
      _discountShare: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setReferrerTier(
      _referrer: PromiseOrValue<string>,
      _tierId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTier(
      _tierId: PromiseOrValue<BigNumberish>,
      _totalRebate: PromiseOrValue<BigNumberish>,
      _discountShare: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTraderReferralCode(
      _account: PromiseOrValue<string>,
      _code: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTraderReferralCodeByUser(
      _code: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tiers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        totalRebate: BigNumber;
        discountShare: BigNumber;
      }
    >;

    traderReferralCodes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  BASIS_POINTS(overrides?: CallOverrides): Promise<BigNumber>;

  codeOwners(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  getTraderReferralInfo(
    _account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string, string]>;

  gov(overrides?: CallOverrides): Promise<string>;

  govSetCodeOwner(
    _code: PromiseOrValue<BytesLike>,
    _newAccount: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isHandler(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  referrerDiscountShares(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  referrerTiers(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  registerCode(
    _code: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setCodeOwner(
    _code: PromiseOrValue<BytesLike>,
    _newAccount: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setGov(
    _gov: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setHandler(
    _handler: PromiseOrValue<string>,
    _isActive: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setReferrerDiscountShare(
    _discountShare: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setReferrerTier(
    _referrer: PromiseOrValue<string>,
    _tierId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTier(
    _tierId: PromiseOrValue<BigNumberish>,
    _totalRebate: PromiseOrValue<BigNumberish>,
    _discountShare: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTraderReferralCode(
    _account: PromiseOrValue<string>,
    _code: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTraderReferralCodeByUser(
    _code: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tiers(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      totalRebate: BigNumber;
      discountShare: BigNumber;
    }
  >;

  traderReferralCodes(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    BASIS_POINTS(overrides?: CallOverrides): Promise<BigNumber>;

    codeOwners(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getTraderReferralInfo(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, string]>;

    gov(overrides?: CallOverrides): Promise<string>;

    govSetCodeOwner(
      _code: PromiseOrValue<BytesLike>,
      _newAccount: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    isHandler(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    referrerDiscountShares(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    referrerTiers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerCode(
      _code: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setCodeOwner(
      _code: PromiseOrValue<BytesLike>,
      _newAccount: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setHandler(
      _handler: PromiseOrValue<string>,
      _isActive: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setReferrerDiscountShare(
      _discountShare: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setReferrerTier(
      _referrer: PromiseOrValue<string>,
      _tierId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTier(
      _tierId: PromiseOrValue<BigNumberish>,
      _totalRebate: PromiseOrValue<BigNumberish>,
      _discountShare: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTraderReferralCode(
      _account: PromiseOrValue<string>,
      _code: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTraderReferralCodeByUser(
      _code: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    tiers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        totalRebate: BigNumber;
        discountShare: BigNumber;
      }
    >;

    traderReferralCodes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "GovSetCodeOwner(bytes32,address)"(
      code?: null,
      newAccount?: null
    ): GovSetCodeOwnerEventFilter;
    GovSetCodeOwner(code?: null, newAccount?: null): GovSetCodeOwnerEventFilter;

    "RegisterCode(address,bytes32)"(
      account?: null,
      code?: null
    ): RegisterCodeEventFilter;
    RegisterCode(account?: null, code?: null): RegisterCodeEventFilter;

    "SetCodeOwner(address,address,bytes32)"(
      account?: null,
      newAccount?: null,
      code?: null
    ): SetCodeOwnerEventFilter;
    SetCodeOwner(
      account?: null,
      newAccount?: null,
      code?: null
    ): SetCodeOwnerEventFilter;

    "SetHandler(address,bool)"(
      handler?: null,
      isActive?: null
    ): SetHandlerEventFilter;
    SetHandler(handler?: null, isActive?: null): SetHandlerEventFilter;

    "SetReferrerDiscountShare(address,uint256)"(
      referrer?: null,
      discountShare?: null
    ): SetReferrerDiscountShareEventFilter;
    SetReferrerDiscountShare(
      referrer?: null,
      discountShare?: null
    ): SetReferrerDiscountShareEventFilter;

    "SetReferrerTier(address,uint256)"(
      referrer?: null,
      tierId?: null
    ): SetReferrerTierEventFilter;
    SetReferrerTier(referrer?: null, tierId?: null): SetReferrerTierEventFilter;

    "SetTier(uint256,uint256,uint256)"(
      tierId?: null,
      totalRebate?: null,
      discountShare?: null
    ): SetTierEventFilter;
    SetTier(
      tierId?: null,
      totalRebate?: null,
      discountShare?: null
    ): SetTierEventFilter;

    "SetTraderReferralCode(address,bytes32)"(
      account?: null,
      code?: null
    ): SetTraderReferralCodeEventFilter;
    SetTraderReferralCode(
      account?: null,
      code?: null
    ): SetTraderReferralCodeEventFilter;
  };

  estimateGas: {
    BASIS_POINTS(overrides?: CallOverrides): Promise<BigNumber>;

    codeOwners(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTraderReferralInfo(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    govSetCodeOwner(
      _code: PromiseOrValue<BytesLike>,
      _newAccount: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isHandler(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    referrerDiscountShares(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    referrerTiers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerCode(
      _code: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setCodeOwner(
      _code: PromiseOrValue<BytesLike>,
      _newAccount: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setHandler(
      _handler: PromiseOrValue<string>,
      _isActive: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setReferrerDiscountShare(
      _discountShare: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setReferrerTier(
      _referrer: PromiseOrValue<string>,
      _tierId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTier(
      _tierId: PromiseOrValue<BigNumberish>,
      _totalRebate: PromiseOrValue<BigNumberish>,
      _discountShare: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTraderReferralCode(
      _account: PromiseOrValue<string>,
      _code: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTraderReferralCodeByUser(
      _code: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tiers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    traderReferralCodes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BASIS_POINTS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    codeOwners(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTraderReferralInfo(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    govSetCodeOwner(
      _code: PromiseOrValue<BytesLike>,
      _newAccount: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isHandler(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    referrerDiscountShares(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    referrerTiers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerCode(
      _code: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setCodeOwner(
      _code: PromiseOrValue<BytesLike>,
      _newAccount: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setGov(
      _gov: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setHandler(
      _handler: PromiseOrValue<string>,
      _isActive: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setReferrerDiscountShare(
      _discountShare: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setReferrerTier(
      _referrer: PromiseOrValue<string>,
      _tierId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTier(
      _tierId: PromiseOrValue<BigNumberish>,
      _totalRebate: PromiseOrValue<BigNumberish>,
      _discountShare: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTraderReferralCode(
      _account: PromiseOrValue<string>,
      _code: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTraderReferralCodeByUser(
      _code: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tiers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    traderReferralCodes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

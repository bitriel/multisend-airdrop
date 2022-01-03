/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface GreeterInterface extends ethers.utils.Interface {
  functions: {
    "maxSendPerTxn()": FunctionFragment;
    "multisend(address[],uint256[])": FunctionFragment;
    "owner()": FunctionFragment;
    "redeem(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setMaxSendPerTxn(uint16)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "maxSendPerTxn",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "multisend",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "redeem", values: [string]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxSendPerTxn",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "maxSendPerTxn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multisend", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxSendPerTxn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Multisend(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TokenRedeem(address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Multisend"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenRedeem"): EventFragment;
}

export type MultisendEvent = TypedEvent<
  [string, BigNumber] & { token: string; total: BigNumber }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type TokenRedeemEvent = TypedEvent<
  [string, BigNumber, string] & { token: string; amount: BigNumber; to: string }
>;

export class Greeter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: GreeterInterface;

  functions: {
    maxSendPerTxn(overrides?: CallOverrides): Promise<[number]>;

    "multisend(address[],uint256[])"(
      participants: string[],
      amounts: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "multisend(address,address[],uint256[])"(
      tokenAddress: string,
      participants: string[],
      amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "redeem(address)"(
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "redeem(address,address)"(
      tokenAddress: string,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxSendPerTxn(
      _maxSendPerTxn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  maxSendPerTxn(overrides?: CallOverrides): Promise<number>;

  "multisend(address[],uint256[])"(
    participants: string[],
    amounts: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "multisend(address,address[],uint256[])"(
    tokenAddress: string,
    participants: string[],
    amounts: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "redeem(address)"(
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "redeem(address,address)"(
    tokenAddress: string,
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxSendPerTxn(
    _maxSendPerTxn: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    maxSendPerTxn(overrides?: CallOverrides): Promise<number>;

    "multisend(address[],uint256[])"(
      participants: string[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "multisend(address,address[],uint256[])"(
      tokenAddress: string,
      participants: string[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "redeem(address)"(
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "redeem(address,address)"(
      tokenAddress: string,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setMaxSendPerTxn(
      _maxSendPerTxn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Multisend(address,uint256)"(
      token?: null,
      total?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; total: BigNumber }
    >;

    Multisend(
      token?: null,
      total?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; total: BigNumber }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "TokenRedeem(address,uint256,address)"(
      token?: null,
      amount?: null,
      to?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { token: string; amount: BigNumber; to: string }
    >;

    TokenRedeem(
      token?: null,
      amount?: null,
      to?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { token: string; amount: BigNumber; to: string }
    >;
  };

  estimateGas: {
    maxSendPerTxn(overrides?: CallOverrides): Promise<BigNumber>;

    "multisend(address[],uint256[])"(
      participants: string[],
      amounts: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "multisend(address,address[],uint256[])"(
      tokenAddress: string,
      participants: string[],
      amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "redeem(address)"(
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "redeem(address,address)"(
      tokenAddress: string,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxSendPerTxn(
      _maxSendPerTxn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    maxSendPerTxn(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "multisend(address[],uint256[])"(
      participants: string[],
      amounts: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "multisend(address,address[],uint256[])"(
      tokenAddress: string,
      participants: string[],
      amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "redeem(address)"(
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "redeem(address,address)"(
      tokenAddress: string,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxSendPerTxn(
      _maxSendPerTxn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
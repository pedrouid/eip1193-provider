import { EventEmitter } from "events";

export interface ProviderRpcError extends Error {
  message: string;
  code: number;
  data?: unknown;
}

export interface ProviderMessage {
  type: string;
  data: unknown;
}

export interface ProviderConnectInfo {
  chainId: string;
}

export interface RequestArguments {
  method: string;
  params?: unknown[] | object;
}

export interface EthSubscription extends ProviderMessage {
  type: "eth_subscription";
  data: {
    subscription: string;
    result: unknown;
  };
}
export interface EIP1193Provider extends EventEmitter {
  request(args: RequestArguments): Promise<unknown>;
}

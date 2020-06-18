import { EventEmitter } from "events";

import { EIP1193Provider, RequestArguments } from "./types";

export class EthereumProvider extends EventEmitter implements EIP1193Provider {
  public request(args: RequestArguments): Promise<unknown> {
    return Promise.resolve();
  }
}

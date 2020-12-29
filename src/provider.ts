import JsonRpcProvider from "@json-rpc-tools/provider";
import { formatJsonRpcRequest } from "@json-rpc-tools/utils";

import { IEthereumProvider, ProviderAccounts } from "./types";

export class EthereumProvider extends JsonRpcProvider
  implements IEthereumProvider {
  public enable(): Promise<ProviderAccounts> {
    return this.request(formatJsonRpcRequest("eth_requestAccounts", []));
  }
}

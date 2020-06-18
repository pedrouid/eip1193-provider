import { EthereumProvider } from "../src";

describe("EthereumProvider", () => {
  it("should instantiate", async () => {
    const provider = new EthereumProvider();
    expect(provider).toBeTruthy();
  });
});

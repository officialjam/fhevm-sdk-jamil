import { EVMFHEProvider } from "../adapters/evm";

test("encrypt/decrypt flow", async () => {
  const fhe = new EVMFHEProvider({ publicKey: "dummy" }, "http://localhost:8545", "0x0");
  expect(typeof fhe.encrypt).toBe("function");
  expect(typeof fhe.decrypt).toBe("function");
});

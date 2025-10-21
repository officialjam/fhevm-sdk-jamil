import { BaseFHEProvider, FHEContextConfig } from "../../core";
import { ethers } from "ethers";
import { FHEContract } from "./contract";

export class EVMFHEProvider extends BaseFHEProvider {
  private contract: FHEContract;
  private signer: ethers.Signer;

  constructor(cfg: FHEContextConfig, providerUrl: string, contractAddress: string) {
    super(cfg);
    const provider = new ethers.JsonRpcProvider(providerUrl);
    this.signer = provider.getSigner();
    this.contract = new FHEContract(contractAddress, this.signer);
  }

  async encrypt(data: bigint | number | string): Promise<string> {
    return await this.contract.encryptValue(data);
  }

  async decrypt(ciphertext: string): Promise<bigint | number | string> {
    return await this.contract.decryptValue(ciphertext);
  }
}

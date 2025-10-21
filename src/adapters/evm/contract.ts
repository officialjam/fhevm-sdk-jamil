import { ethers } from "ethers";
const fheContractAbi = [
  "function encrypt(uint256 data) public view returns (bytes)",
  "function decrypt(bytes cipher) public view returns (uint256)"
];

export class FHEContract {
  private contract: ethers.Contract;

  constructor(address: string, signer: ethers.Signer) {
    this.contract = new ethers.Contract(address, fheContractAbi, signer);
  }

  async encryptValue(data: bigint | number | string): Promise<string> {
    return await this.contract.encrypt(data);
  }

  async decryptValue(cipher: string): Promise<bigint | number | string> {
    return await this.contract.decrypt(cipher);
  }
}

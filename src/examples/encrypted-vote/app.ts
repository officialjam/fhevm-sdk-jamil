import { EVMFHEProvider } from "../../adapters/evm";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  const fhe = new EVMFHEProvider(
    { publicKey: process.env.PUBLIC_KEY! },
    process.env.RPC_URL || "https://rpc.zama.network",
    process.env.CONTRACT_ADDRESS || "0xYourFHEContractAddress"
  );

  const encryptedVote = await fhe.encrypt("yes");
  console.log("Encrypted vote:", encryptedVote);

  const decrypted = await fhe.decrypt(encryptedVote);
  console.log("Decrypted result:", decrypted);
}

main();

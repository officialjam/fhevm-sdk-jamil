export interface FHEContextConfig {
  publicKey: string;
  privateKey?: string;
  chainId?: number;
}

export interface FHEContext {
  encrypt(data: bigint | number | string): Promise<string>;
  decrypt(ciphertext: string): Promise<bigint | number | string>;
}

export abstract class BaseFHEProvider implements FHEContext {
  constructor(protected config: FHEContextConfig) {}
  abstract encrypt(data: bigint | number | string): Promise<string>;
  abstract decrypt(ciphertext: string): Promise<bigint | number | string>;
}

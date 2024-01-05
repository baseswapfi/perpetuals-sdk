import { JsonRpcProvider } from '@ethersproject/providers';
import { Signer } from 'ethers';

export type SignerOrProvider = JsonRpcProvider | Signer;

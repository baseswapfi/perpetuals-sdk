import { Signer } from 'ethers';
import { SignerOrProvider } from '../types';
import { JsonRpcProvider } from '@ethersproject/providers';

export async function getSignerOrProviderChainId(
  signer: SignerOrProvider
): Promise<number> {
  if (signer instanceof Signer) {
    return (await signer.provider?.getNetwork())?.chainId || 0;
  }

  if (signer instanceof JsonRpcProvider) {
    return signer.network.chainId;
  }

  return 0;
}

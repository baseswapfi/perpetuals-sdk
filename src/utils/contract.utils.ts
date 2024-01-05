import { Vault__factory } from '../typechain-types';
import { ADDRESSES } from '../data/contracts';
import { SignerOrProvider } from '../types';
import { getSignerOrProviderChainId } from './provider.utils';

export const getContractChainAddresses = (chainId: number, key: string) =>
  ADDRESSES[chainId][key];

export async function getVault(signer: SignerOrProvider) {
  return Vault__factory.connect(
    getContractChainAddresses(
      await getSignerOrProviderChainId(signer),
      'VAULT'
    ),
    signer
  );
}

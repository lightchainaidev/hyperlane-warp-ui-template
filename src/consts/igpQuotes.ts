import { ProtocolType } from '@hyperlane-xyz/utils';

// IGP Quote overrides can be set here
// If specified, this value will be used instead of querying the token adapter
// Protocol to value | map<chainId,value>
export const DEFAULT_IGP_QUOTES: Partial<
  Record<ProtocolType, string | Record<string | number, string>>
> = {
  [ProtocolType.Sealevel]: '10000',
  [ProtocolType.Cosmos]: {
    'neutron-1': '270000', // 0.27 TIA
    'injective-1': '30000000000000000', // 0.03 INJ
  },
};

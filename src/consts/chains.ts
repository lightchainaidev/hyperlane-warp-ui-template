import { ChainMap, ChainMetadata, ChainTechnicalStack, ExplorerFamily } from '@hyperlane-xyz/sdk';
import { etherToken } from '@hyperlane-xyz/sdk/dist/consts/chainMetadata';
import { ProtocolType } from '@hyperlane-xyz/utils';

// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  // mycustomchain: {
  //   protocol: ProtocolType.Ethereum,
  //   chainId: 123123,
  //   domainId: 123123,
  //   name: 'mycustomchain',
  //   displayName: 'My Chain',
  //   nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  //   rpcUrls: [{ http: 'https://mycustomchain-rpc.com' }],
  //   blockExplorers: [
  //     {
  //       name: 'MyCustomScan',
  //       url: 'https://mycustomchain-scan.com',
  //       apiUrl: 'https://api.mycustomchain-scan.com/api',
  //       family: ExplorerFamily.Etherscan,
  //     },
  //   ],
  //   blocks: {
  //     confirmations: 1,
  //     reorgPeriod: 1,
  //     estimateBlockTime: 10,
  //   },
  //   logoURI: '/logo.svg',
  // },

  ancient8: {
    blockExplorers: [
      {
        apiUrl: 'https://scan.ancient8.gg/api',
        family: ExplorerFamily.Blockscout,
        name: 'Ancient8 Explorer',
        url: 'https://scan.ancient8.gg',
      },
    ],
    blocks: {
      confirmations: 1,
      estimateBlockTime: 2,
      reorgPeriod: 0,
    },
    chainId: 888888888,
    displayName: 'Ancient8',
    domainId: 888888888,
    isTestnet: false,
    name: 'ancient8',
    nativeToken: etherToken,
    gasCurrencyCoinGeckoId: 'ethereum',
    protocol: ProtocolType.Ethereum,
    rpcUrls: [{ http: 'https://rpc.ancient8.gg' }],
    technicalStack: ChainTechnicalStack.Other,
    mailbox: '0x2f2aFaE1139Ce54feFC03593FeE8AB2aDF4a85A7',
    logoURI: '/logos/ancient8.svg',
  },

  celestia: {
    protocol: ProtocolType.Cosmos,
    domainId: 123456789, // TODO not a real domain id
    chainId: 'celestia',
    name: 'celestia',
    displayName: 'Celestia',
    bech32Prefix: 'celestia',
    slip44: 118,
    nativeToken: {
      name: 'Tia',
      symbol: 'TIA',
      decimals: 6,
      denom: 'utia',
    },
    grpcUrls: [{ http: 'https://grpc.celestia.nodestake.top' }],
    restUrls: [{ http: 'https://public-celestia-lcd.numia.xyz' }],
    rpcUrls: [{ http: 'https://public-celestia-rpc.numia.xyz' }],
    blockExplorers: [
      {
        name: 'MintScan',
        url: 'https://www.mintscan.io/celestia',
        // TODO API not supported, using url to meet validation requirements
        apiUrl: 'https://www.mintscan.io/celestia',
        family: ExplorerFamily.Other,
      },
    ],
    logoURI: '/logos/celestia.png',
    transactionOverrides: {
      gasPrice: 0.1,
    },
  },
};

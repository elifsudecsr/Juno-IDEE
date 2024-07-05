// src/chains.ts
import { Chain } from '@chain-registry/types';
import { chains as cosmosChains } from 'chain-registry';

export const chains: Chain[] = [
  ...cosmosChains,
  {
    chain_name: 'juno',
    chain_id: 'juno-1',
    rpc: ['https://rpc-juno.itastakers.com'],
    rest: ['https://lcd-juno.itastakers.com'],
    bech32_prefix: 'juno',
    bip44: {
      coin_type: 118,
    },
    coinType: 118,
    stakeCurrency: {
      coinDenom: 'JUNO',
      coinMinimalDenom: 'ujuno',
      coinDecimals: 6,
      coinGeckoId: 'juno-network',
    },
    walletUrlForStaking: 'https://www.mintscan.io/juno/staking',
    bip44: {
      coinType: 118,
    },
    currencies: [
      {
        coinDenom: 'JUNO',
        coinMinimalDenom: 'ujuno',
        coinDecimals: 6,
        coinGeckoId: 'juno-network',
      },
    ],
    feeCurrencies: [
      {
        coinDenom: 'JUNO',
        coinMinimalDenom: 'ujuno',
        coinDecimals: 6,
        coinGeckoId: 'juno-network',
      },
    ],
    gasPriceStep: {
      low: 0.025,
      average: 0.03,
      high: 0.04,
    },
    features: ['stargate', 'ibc-transfer'],
  },
];

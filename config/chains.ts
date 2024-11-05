import { Hex } from 'viem';
import { arbitrumSepolia, Chain, optimismSepolia } from 'viem/chains';

export type ChainType = {
  viem: Chain;
  bundlerRpc: any;
  eId: number;
  paymaster: Hex;
};

export const chains: {
  [key: string]: ChainType;
} = {
  arbitrum: {
    viem: arbitrumSepolia,
    bundlerRpc: `https://arb-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_BUNDLER_API_KEY}`,
    eId: 40231,
    paymaster: '0x15f5DD9Af65780e6672B8d083E64cAaCC10d0d6A',
  },
  optimism: {
    viem: optimismSepolia,
    bundlerRpc: `https://opt-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_BUNDLER_API_KEY}`,
    eId: 40232,
    paymaster: '0x8A06F4AA58Cc603B0e3dC1e7D158d29b0542e1d9',
  },
};

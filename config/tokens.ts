export type TokenType = {
  name: string;
  coin: string;
  network: string;
  address?: string;
  balance?: string;
  decimals?: number;
  rate?: string;
};

export const tokens: {
  [key: string]: TokenType;
} = {
  ethereum: {
    name: 'Ethereum',
    coin: 'ETH',
    network: 'arbitrum',
    balance: '0.001',
    rate: '3000',
  },
  usdc: {
    name: 'USD Coin',
    coin: 'USDC',
    network: 'arbitrum',
    address: '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d',
  },
  arbitrum: {
    name: 'Arbitrum',
    coin: 'ARB',
    network: 'arbitrum',
    address: '0x65Dd386b14dbDDE11522592db25567b1EA919DeF',
  },
  optimism: {
    name: 'Optimism',
    coin: 'OP',
    network: 'optimism',
    address: '0x11cDa4B3A53CbDf37D497Efc2873Df3c8af48280',
  },
  gas: {
    name: 'Gas Token',
    coin: 'GAS',
    network: 'arbitrum',
    address: '0xdcC6b631Da3E8c5226167bDF1E9E4eBC186Ea509',
  },
};

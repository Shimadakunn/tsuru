import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

import { SendModal, SwapModal } from '../modals';
import { Balance, Chart, Defi, Footer, Header, Trigger } from './cryptosComponents';

import { Separator } from '~/components/ui';
import { ExpandableModal, ModalContent, ModalTrigger } from '~/components/ui/rectangle';
import { TokenType, tokens } from '~/config';

const CryptoCard = ({
  token,
  onShowExchange,
  onShowSend,
}: {
  token: TokenType;
  onShowExchange: (orderType: 'buy' | 'sell') => void;
  onShowSend: () => void;
}) => {
  return (
    <ExpandableModal>
      <ModalTrigger>
        <Trigger token={token} />
      </ModalTrigger>

      <ModalContent>
        <View className="relative flex-1">
          <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 80 }}>
            <Header token={token} />
            <Chart />
            <Separator />
            <Balance token={token} onShowSend={onShowSend} />
            <Separator />
            <Defi />
          </ScrollView>
          <Footer onShowExchange={onShowExchange} />
        </View>
      </ModalContent>
    </ExpandableModal>
  );
};

const Cryptos = () => {
  const [showExchange, setShowExchange] = useState(false);
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [selectedToken, setSelectedToken] = useState<TokenType | null>(null);
  const [showSend, setShowSend] = useState(false);
  const token: TokenType = tokens.ethereum;
  const token2: TokenType = tokens.usdc;

  const handleShowExchange = (type: 'buy' | 'sell', token: TokenType) => {
    setOrderType(type);
    setSelectedToken(token);
    setShowExchange(true);
  };

  const handleShowSend = (token: TokenType) => {
    setSelectedToken(token);
    setShowSend(true);
  };

  return (
    <>
      <CryptoCard
        token={token}
        onShowExchange={(type) => handleShowExchange(type, token)}
        onShowSend={() => handleShowSend(token)}
      />
      <CryptoCard
        token={token2}
        onShowExchange={(type) => handleShowExchange(type, token2)}
        onShowSend={() => handleShowSend(token2)}
      />
      {selectedToken && (
        <SwapModal
          showExchange={showExchange}
          setShowExchange={setShowExchange}
          token={selectedToken}
          orderType={orderType}
        />
      )}
      {selectedToken && (
        <SendModal showSend={showSend} setShowSend={setShowSend} token={selectedToken} />
      )}
    </>
  );
};

export default Cryptos;

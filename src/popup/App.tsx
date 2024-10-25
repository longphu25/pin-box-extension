import {
  NetworkId,
  WalletId,
  WalletManager,
  WalletProvider,
} from '@txnlab/use-wallet-react';
import { useEffect, useState } from 'react';
import './App.css';

import { Connect } from './Connect';

const walletManager = new WalletManager({
  wallets: [WalletId.DEFLY, WalletId.PERA],
  network: NetworkId.TESTNET,
});

function App() {
  const [isLoading, setLoading] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<string | null>();

  useEffect(() => {
    chrome.storage.local.get(['selectedWallet'], (result) => {
      const storedWallet = result.selectedWallet ?? null;
      setSelectedWallet(storedWallet);
      setLoading(false);
    });
  }, []);

  if (isLoading) return null;

  return (
    <WalletProvider manager={walletManager}>
      <Connect />
      {selectedWallet && (
        <div className="bg-accent-brand/10 flex w-full items-center gap-2 rounded-lg p-2">
          Select Wallet
        </div>
      )}
    </WalletProvider>
  );
}

export default App;

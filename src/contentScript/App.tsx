import AlgorandProvider from './providers/AlgorandProvider';
import { useEffect } from 'react';
import './App.css';

export default function App() {
  useEffect(() => {
    console.log('content ui loaded');
  }, []);

  const wallet = 'wallet';
  const tx = 'tx';

  const handleButtonClick = () => {
    console.log('button clicked');
    chrome.runtime.sendMessage({
      type: 'sign_transaction',
      wallet,
      payload: {
        txData: tx,
      },
    });
  };

  return (
    <AlgorandProvider>
      <div>
        <h1>@txnlab/use-wallet-react</h1>
      </div>
      <div>
        <button type="button" onClick={handleButtonClick}>
          Open Popup
        </button>
      </div>
    </AlgorandProvider>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
// import base58 from 'bs58';
// import { Buffer } from 'buffer';

// https://stackoverflow.com/questions/20019958/chrome-extension-how-to-send-data-from-content-script-to-popup-html

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log('on message', msg, sender);
  if (!sender.tab || !sender.tab.id) {
    return null;
  }

  if (msg.type === 'getSelectedWallet') {
    chrome.storage.local.get(['selectedWallet'], (storage) => {
      sendResponse(storage.selectedWallet);
    });
    return true;
  }
  console.log('message received', msg);
  // if (!msg.wallet) return false;
  handleWalletCommunication(sender.tab.id, msg.type, msg.wallet, msg.payload)
    .then((res) => {
      sendResponse(res);
    })
    .catch((err) => {
      console.error('error handling message', err);
    });

  return true;
});

async function handleWalletCommunication(
  tabId: number,
  type: string,
  wallet: string,
  payload: object,
) {
  switch (type) {
    case 'sign_transaction':
      console.log('signing transaction', wallet, payload);
      console.log('sending message to tab', tabId);
      break;
    default:
      break;
  }
}

// chrome.action.onClicked.addListener((tab) => {
//   console.log('action clicked', tab);
//   chrome.windows.create({
//     url: chrome.runtime.getURL('popup.html'),
//     type: 'popup',
//     width: 400,
//     height: 600,
//   });
// });

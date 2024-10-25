/* eslint-disable @typescript-eslint/no-unused-vars */
// import base58 from 'bs58';
// import { Buffer } from 'buffer';

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

  return true;
});

chrome.action.onClicked.addListener((tab) => {
  console.log('action clicked', tab);
  chrome.windows.create({
    url: chrome.runtime.getURL('popup.html'),
    type: 'popup',
    width: 400,
    height: 600,
  });
});

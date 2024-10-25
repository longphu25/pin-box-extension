function initTwitterObserver() {
  chrome.runtime.sendMessage({ type: 'getSelectedWallet' }, (wallet) => {
    if (wallet) {
      console.log('wallet found', wallet);
      console.log('twitter_observer_init_success');
    } else {
      console.log('no wallet found');
    }
  });
}

initTwitterObserver();

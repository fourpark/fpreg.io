window.addEventListener('load', async () => {
	if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      await ethereum.enable();
      console.log('Connection Established');
    } catch (error) {
      console.log('Connection Not Established');
    }
	} else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
    // Acccounts always exposed
    web3.eth.sendTransaction({/* ... */});
	} else {
    //console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
	}
});
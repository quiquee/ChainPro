function getBalance(address) {
    var wei, balance ;    
    console.log("Getting balance of " + address );
    try {
        web3.eth.getBalance(address, function (error, wei) {
            if (!error) {
                balance = web3.utils.fromWei(wei, 'ether');
                console.log("Balance is:" + balance);
                return balance;
            }
        });

    } catch (err) {
        console.log(err);
    }
}

function connectedAddress() {
    // Load WEB3
    // Check wether it's already injected by something else (like Metamask or Parity Chrome plugin)
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);

        // Or connect to a node
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    // Check the connection
    if (!web3.isConnected()) {
        console.error("Not connected");

    }

    var account = web3.eth.accounts[0];
    var accountInterval = setInterval(function () {
        if (web3.eth.accounts[0] !== account) {
            account = web3.eth.accounts[0];
            document.getElementById("address").innerHTML = account;
        }
    }, 100);
}

function bip32Test() {
    let mnemonic = bip39.generateMnemonic()
    // use this mnemonic to test in an online bip32
    let seed = bip39.mnemonicToSeedSync(mnemonic)
    console.log('Mnemonic: ' + mnemonic);
    let hdNode = bip32.fromSeed(seed)
    // What are hardened?
    let childNode = hdNode.deriveHardened(0)
    // is this m0/0 y m0/1 ?
    let external = childNode.derive(0)
    let internal = childNode.derive(1)
    console.log('Derive0: 0x' + external.privateKey.toString('hex'), ' Internal:' + internal.privateKey.toString('hex'))

}


function getMasterAddress(mnemonic) {
    let seed = bip39.mnemonicToSeedSync(mnemonic)
    console.log('Seed hex: ' + seed.toString('hex'))
    let hdNode = bip32.fromSeed(seed)
    // First child hardened m/0'
    let childNode = hdNode.deriveHardened(0)
    // is this m/0'
    let derived0 = childNode.derive(0)
    console.log('Root Key base58: ' + hdNode.toBase58())
    console.log('Derived m/0 hex: ' + childNode.publicKey.toString('hex'))
    console.log('Derived m/0 base58 priv: ' + childNode.toBase58())
    console.log('Derived m/0 base58 pub: ' + childNode.neutered().toBase58())
    console.log('Derive m/3/4 base58: ' + hdNode.derivePath('3/4').toBase58())
    console.log('Derive m/3/4 base58: ' + hdNode.derivePath('3/4').neutered().toBase58())
    console.log()
}

function getAddress(path, mnemonic) {
    let seed = bip39.mnemonicToSeedSync(mnemonic)    
    let hdNode = bip32.fromSeed(seed)    
    return hdNode.derivePath(path).neutered().toBase58() ;
}

function deriveEthAddress(pubKey) {
    let keccak256 = jssha3.keccak256;
    const address = keccak256(pubKey) // keccak256 hash of  publicKey
    // Get the last 20 bytes of the public key
    return  address.substring(address.length - 40, address.length)
}

// In metamask of FF Developer
// range ankle neither across hockey seminar express soul clean brass say priority
// 0x2Da4c348AfB37883D340A0f70C48A8826C60a30A
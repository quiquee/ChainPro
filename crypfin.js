
function getBalance(address) {
    var address, wei, balance
    address = document.getElementById("address").value;
    try {
        web3.eth.getBalance(address, function (error, wei) {
            if (!error) {

                balance = web3.utils.fromWei(wei, 'ether');
                return balance ;
            }
        });

    } catch (err) {
        console.log(err);
    }
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
    console.log('Derive0: 0x' +   external.privateKey.toString('hex') , ' Internal:' + internal.privateKey.toString('hex'))

}


function getMasterAddress(mnemonic) {
    let seed = bip39.mnemonicToSeedSync(mnemonic)
    console.log('Seed hex: ' + seed.toString('hex'))
    let hdNode = bip32.fromSeed(seed)
    // First child hardened m/0'
    let childNode = hdNode.deriveHardened(0)
    // is this m/0'
    let derived0 = childNode.derive(0)
    console.log('Root Key base58: ' +   hdNode.toBase58() )
    console.log('Derived m/0 hex: ' + childNode.publicKey.toString('hex'))
    console.log('Derived m/0 base58 priv: ' + childNode.toBase58())
    console.log('Derived m/0 base58 pub: ' + childNode.neutered().toBase58())
    console.log('Derive m/3/4 base58: ' + hdNode.derivePath('3/4').toBase58())
    console.log('Derive m/3/4 base58: ' + hdNode.derivePath('3/4').neutered().toBase58() )
    console.log()
}
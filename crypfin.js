/*
const bip39 = require("bip39");
const bip32 = require("./myBitcoinjs/bip32.js");
const jssha3 = require("./myBitcoinjs/js-sha3.js");
*/
function getBalance(address) {
    var wei, balance;
    console.log("Getting balance of " + address);
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

    // OK lets bypass this using my Kovan in Chrome ux31a
    mnemonic = "model clarify much common crater movie orbit dizzy paddle crouch pony panel";
    mnemonic = "party box feel talent peace tiger endorse defy cheese girl tumble mail";
    //mnemonic="range ankle neither across hockey seminar express soul clean brass say priority";
    // Use bip39 to generate a Mnemonic phrase
    console.log('Mnemonic: bip39.generateMnemonic() = ' + mnemonic);

    // use this mnemonic to test in an online bip32
    let seed = bip39.mnemonicToSeedSync(mnemonic)
    console.log('seed := bip39.mnemonicToSeedSync(mnemonic).toString("hex") = ' + seed.toString('hex'));

    // Now create a key using that seed    
    let hdNode = bip32.fromSeed(seed)

    // This shows the hdNode object: private key, chainCode and others
    //console.log('hdNode := bip32.fromSeed(seed) object = ' + JSON.stringify(hdNode));
    console.log('hdNode.toBase58() = xprv9s2...Xz3 ' + hdNode.toBase58());
    // console.log('hdNode.neutered.toBase58() = ' + hdNode.neutered().toBase58());

    if (0) {
        // We can crate a new bip32 instance using the privkey, chaincode and network derived above
        let hdNode_bis;
        hdNode_bis = bip32.fromPrivateKey(hdNode.privateKey, hdNode.chainCode, hdNode.network)
        console.log('hdNode_bis := bip32.fromPrivateKey(hdNode.privateKey, hdNode.chainCode, hdNode.network) object : ' + JSON.stringify(hdNode));
        console.log('hdNode_bis.toBase58() = ' + hdNode_bis.toBase58());

        // What are hardened?
        let childNode = hdNode.deriveHardened(0)
        console.log('childNode := hdNode.deriveHardened(0).toBase58() = ' + hdNode.toBase58());

        // We can create new extPrivate keys from hardened?
        console.log('childNode.derive(0).toBase58() = ' + childNode.derive(0).toBase58());
        console.log('childNode.derive(1).toBase58() = ' + childNode.derive(1).toBase58());

        // And the corresponding Eth Addresses 
        console.log("Eth Addresss 0: 0x + childNode.derive(0).toBase58() = 0x" + deriveEthAddress(childNode.derive(0).toBase58()));
        console.log("Eth Addresss 1: 0x + childNode.derive(1).toBase58() = 0x" + deriveEthAddress(childNode.derive(1).toBase58()));

        // And the corresponding pubKeys are
        console.log('childNode.derive(0).neutered().toBase58() = ' + childNode.derive(0).neutered().toBase58());
        console.log('childNode.derive(1).neutered().toBase58() = ' + childNode.derive(1).neutered().toBase58());


        // And the corresponding Eth Addresses
        console.log("Eth Addresss 0: 0x + childNode.derive(0).neutered().toBase58() = 0x" + deriveEthAddress(childNode.derive(0).neutered().toBase58()));
        console.log("Eth Addresss 1: 0x + childNode.derive(1).neutered().toBase58() = 0x" + deriveEthAddress(childNode.derive(1).neutered().toBase58()));
    }

    // MetaMask uses m/44'/60'/0'/0 as the derivation path (BIP44), for all networks
    let path = "m/44'/60'/0'/0/0";
    let ehdNode = hdNode.derivePath(path);

    console.log("ehdNode := hdNode.derivePath(" + path + ") toBase58() = " + ehdNode.toBase58());
    console.log("ehdNode := hdNode.derivePath(" + path + ") neutered  toBase58() = " + ehdNode.neutered().toBase58());
    console.log("deriveEthAddress(ehdNode.neutered().toBase58()) = " + deriveEthAddress(ehdNode.neutered().toBase58()));

    let ehdNode_0 = ehdNode.deriveHardened(0);
    let ehdNode_1 = ehdNode.deriveHardened(1);

    console.log("ehdNode_0:= ehdNode.deriveHardened(0)  hex = " + ehdNode_0.privateKey.toString('hex'));
    console.log("deriveEthAddress(ehdNode_0) = " + deriveEthAddress(ehdNode_0.toBase58()));
    console.log("ehdNode_1:= ehdNode.deriveHardened(1)  hex = " + ehdNode_1.privateKey.toString('hex'));
    console.log("deriveEthAddress(ehdNode_1) = " + deriveEthAddress(ehdNode_1.toBase58()));

    // !!!! All good to here as per https://iancoleman.io/bip39/ 
    // Still can't  reproduce address in Metamask !!

    // let ehdNode_0b = hdNode.derivePath( path + "/0'") ;
    //console.log("ehdNode_0b:= hdNode.derivePath( " + path + "/0') hex = " + ehdNode_0b.privateKey.toString('hex') );

    // console.log("deriveEthAddress(ehdNode_0) = " + deriveEthAddress(ehdNode_0));

}

function getAddress(path, mnemonic) {
    let seed = bip39.mnemonicToSeedSync(mnemonic)
    let hdNode = bip32.fromSeed(seed)
    return hdNode.derivePath(path).neutered().toBase58();
}

function deriveEthAddress(pubKey) {
    try {
        const EC = new elliptic.ec('secp256k1');
        // Decode public key
        const key = EC.keyFromPublic(pubKey, 'hex');

        // Convert to uncompressed format
        const publicKey = key.getPublic().encode('hex').slice(2);

        // Now apply keccak
        let keccak256 = jssha3.keccak256;
        //const address = keccak256(Buffer.from(publicKey, 'hex')).slice(64 - 40);
        const address = keccak256( publicKey.toString('hex')).slice(64 - 40);

        //console.log(`Public Key: 0x${publicKey}`);
        return `0x${address.toString()}` ;
    } catch (err) {
        console.log(err + " with "+ pubKey);
    }
}

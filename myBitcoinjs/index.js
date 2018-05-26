let bitcoin = require('../bitcoinjs-lib')

// your code here
function myFunction () {
        return bitcoin.ECPair.makeRandom().toWIF()
        }

function newBIP44() {
  var mnemonic = 'praise you muffin lion enable neck grocery crumble super myself license ghost'
  var seed = bitcoin.HDNobip39.mnemonicToSeed(mnemonic)
  var root = bitcoin.bip32.fromSeed(seed)
  var child1 = root.derivePath("m/44'/0'/0'/0/0")
  return child1;
}

module.exports = {
        myFunction
}

console.log("myFunction loaded: " + myFunction()) ;
console.log("newBIP44 loaded: " + newBIP44()) ;

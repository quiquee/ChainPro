let bitcoin = require('../bitcoinjs-lib')
let bip39 = require('../bip39')
// your code here
function myFunction () {
        return bitcoin.ECPair.makeRandom().toWIF()
        }

function newBIP44() {
  var mnemonic = 'praise you muffin lion enable neck grocery crumble super myself license ghost'
  var seed = bip39.mnemonicToSeed(mnemonic)
  var root = bitcoin.bip32.fromSeed(seed)
  var child1 = root.derivePath("m/44'/0'/0'/0/0")
  return child1;
}

module.exports = {
        myFunction
}

console.log("myFunction loaded: " + myFunction()) ;
//console.log("newBIP44 loaded: " + JSON.stringify(newBIP44(),null,4)) ;
console.log("newBIP44 loaded: " + newBIP44.toBase58()) ;
